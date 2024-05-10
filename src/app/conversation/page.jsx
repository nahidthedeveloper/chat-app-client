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
    const user = data?.user.user_id

    const hookForm = {
        register,
        handleSubmit,
        reset,
    }


    useEffect(() => {
        if (conversations) {
            let activeUser = conversations.filter((conversation) => conversation.id === activeConversation)
            setActiveConversationData(activeUser[0])
        }
    }, [activeConversation, conversations])

    useEffect(() => {
        if (tokenContext === 'added') {
            httpClient
                .get(`/chat/conversation/`)
                .then((response) => {
                    setConversations(response.data)
                    const firstMessage = response.data.length > 0 ? Object.values(response.data)[0].id : null
                    conversationHandler(firstMessage)
                })
                .catch((err) => {
                    console.log(err)
                    toast.error(err.message)
                })
        }

    }, [tokenContext])

    useEffect(() => {
        let socket = null
        if (activeConversation) {
            socket = new WebSocket(`ws://localhost:8000/ws/chat/${activeConversation}/`)
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
            socket?.close()
        }
    }, [activeConversation])

    const conversationHandler = (id) => {
        setActiveConversation(id)
        if (id) {
            httpClient
                .get(`/chat/messages/${id}`)
                .then((response) => {
                    setMessages(response.data)
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
    }

    const messageSubmit = (data) => {
        httpClient
            .post(`/chat/sent_message/${activeConversation}/`, { ...data })
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                toast.error(err.message)
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
                <Grid item md={3}>
                    <LeftSide conversations={conversations}
                              activeConversation={activeConversation}
                              conversationHandler={conversationHandler}
                    />
                </Grid>

                <Grid item md={9}>
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
