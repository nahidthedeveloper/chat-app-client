'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useContext, useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import { toast } from 'react-toastify'
import { TokenContext } from '@/context/tokenContext'
import { useSession } from 'next-auth/react'
import LeftSide from '@/components/inbox_ui/Left_Side'
import RightSide from '@/components/inbox_ui/Right_Side'
import { useForm } from 'react-hook-form'


const Message = () => {
    const tokenContext = useContext(TokenContext)
    const { register, handleSubmit, reset } = useForm()
    const { data } = useSession()
    const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState([])
    const [activeConversation, setActiveConversation] = useState(null)
    const [activeConversationData, setActiveConversationData] = useState([])
    const [changer, setChanger] = useState(false)
    const user = data?.user.user_id
    const token = data?.user.accessToken

    const hookForm = {
        register,
        handleSubmit,
        reset,
    }

    const [filterUser, setFilterUser] = useState('')
    const [searchText, setSearchText] = useState('')

    const searchUserHandler = () => {
        httpClient
            .get(`/users/?search=${searchText}`)
            .then((response) => {
                setFilterUser(response.data)
            })
            .catch((err) => {
                toast.error(err.message)
            })
    }

    const fetchConversationList = () => {
        httpClient
            .get(`/chat/conversation_list/`)
            .then((response) => {
                setConversations(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (conversations) {
            let activeUser = conversations.filter((conversation) => conversation.id === activeConversation)
            setActiveConversationData(activeUser[0])
        }
    }, [activeConversation, conversations])

    useEffect(() => {
        if (tokenContext === 'added') {
            fetchConversationList()
        }
    }, [changer])

    useEffect(() => {
        if (tokenContext === 'added') {
            httpClient
                .get(`/chat/conversation_list/`)
                .then((response) => {
                    setConversations(response.data)
                    const firstMessage = response.data.length > 0 ? Object.values(response.data)[0].id : null
                    oneConversationGetHandler(firstMessage)
                })
                .catch((err) => {
                    console.log(err)
                    toast.error(err.message)
                })
        }

    }, [tokenContext])

    useEffect(() => {
        let ws = null

        if (token) {
            ws = new WebSocket(`ws://localhost:8000/ws/friend_request/?token=${token}`)

            ws.onopen = function(e) {
                console.log('Connection Established for Friend Request')
            }

            ws.onclose = function(e) {
                console.log('Connection Lost for Friend Request')
            }

            ws.onerror = function(e) {
                console.error('Error Occurred for Friend Request:', e)
            }

            ws.onmessage = function(e) {
                let data = JSON.parse(e.data)
                let resConversation = data.conversation
                if (resConversation !== undefined) {
                    fetchConversationList()
                    searchUserHandler()
                }
            }
        }

        return () => {
            if (ws) {
                ws.close()
            }
        }
    }, [token])

    useEffect(() => {
        let socket = null
        if (activeConversation) {
            socket = token && new WebSocket(`ws://localhost:8000/ws/chat/${activeConversation}/?token=${token}`)
            socket.onopen = function(e) {
                console.log('Connection Established')
            }

            socket.onclose = function(e) {
                console.log('Connection Lost')
            }
            socket.onerror = function(e) {
                console.log('Error Occur')
            }
            socket.onmessage = function(e) {
                let data = JSON.parse(e.data)
                let resMessage = data.message
                if (resMessage !== undefined) {
                    setMessages(prevMessages => [resMessage, ...prevMessages])
                }
            }

        }
        return () => {
            if (socket) {
                socket.close()
            }
        }
    }, [activeConversation])


    const oneConversationGetHandler = (id) => {
        setActiveConversation(id)
        if (id) {
            httpClient
                .get(`/chat/conversation/${id}`)
                .then((response) => {
                    setMessages(response.data)
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
    }

    const createConversationHandler = (id) => {
        // id means receiver (user) id
        httpClient
            .post(`/chat/create_conversation/${id}/`)
            .then((response) => {
                console.log(response.data.message)
            })
            .catch((err) => {
                toast.error(err.response?.data?.message)
            })
        setChanger(!changer)
    }

    const acceptConversationHandler = (id, requester) => {
        let payload = {
            requester,
        }
        httpClient
            .post(`/chat/accept_conversation/${id}/`, { ...payload })
            .then((response) => {
                console.log(response.data.message)
            })
            .catch((err) => {
                toast.error(err.response?.data?.message)
            })
        setChanger(!changer)
    }

    const deleteConversationHandler = (id) => {
        httpClient
            .post(`/chat/delete_conversation/${id}/`)
            .then((response) => {
                console.log(response.data.message)
            })
            .catch((err) => {
                toast.error(err.response?.data?.message)
            })
        setChanger(!changer)
    }

    const messageSubmit = (data) => {
        httpClient
            .post(`/chat/sent_message/${activeConversation}/`, { ...data })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                toast.error(err.response?.data?.message)
            })
        reset()
    }


    return (
        <Box
            sx={{
                mt: '10px',
                bgcolor: 'chatBody.main',
                borderRadius: '20px',
                mb: '6px',
                height: '760px',
            }}
        >
            <Grid container>
                <Grid item sm={4} md={3}>
                    <LeftSide conversations={conversations}
                              activeConversation={activeConversation}
                              oneConversationGetHandler={oneConversationGetHandler}
                              createConversationHandler={createConversationHandler}
                              acceptConversationHandler={acceptConversationHandler}
                              deleteConversationHandler={deleteConversationHandler}
                              searchUserHandler={searchUserHandler}
                              filterUser={filterUser}
                              setFilterUser={setFilterUser}
                              searchText={searchText}
                              setSearchText={setSearchText}
                    />
                </Grid>

                <Grid item xs={12} sm={8} md={9}>
                    <RightSide messages={messages}
                               activeConversationData={activeConversationData}
                               messageSubmit={messageSubmit}
                               hookForm={hookForm}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Message
