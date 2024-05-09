'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useContext, useEffect, useState } from 'react'
import { httpClient } from '@/utils/api'
import { toast } from 'react-toastify'
import { TokenContext } from '@/context/tokenContext'
import Avatar from '@mui/material/Avatar'
import ChatIcon from '@mui/icons-material/Chat'
import SendIcon from '@mui/icons-material/Send'
import { Button, Divider, Typography } from '@mui/material'
import packageJson from '../../../package.json'
import TextField from '@mui/material/TextField'
import Conversation from '@/components/Conversation/Conversation'
import User from '@/components/User'
import SettingsIcon from '@mui/icons-material/Settings'
import { useSession } from 'next-auth/react'
import DeleteMessage from '@/components/message/DeleteMessage'
import Sender from '@/components/message/Sender'
import Receiver from '@/components/message/Receiver'
import { useForm } from 'react-hook-form'
import SelectedUser from '@/components/SelectedUser'


const Message = () => {
    const tokenContext = useContext(TokenContext)
    const { data } = useSession()
    const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState([])
    const [activeConversation, setActiveConversation] = useState(null)
    const [activeConversationData, setActiveConversationData] = useState([])
    const { register, handleSubmit, reset } = useForm()
    const user = data?.user.user_id


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
                    const firstMessage = Object.values(response.data)[0].id
                    conversationHandler(firstMessage)
                })
                .catch((err) => {
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
        httpClient
            .get(`/chat/messages/${id}`)
            .then((response) => {
                setMessages(response.data)
            })
            .catch((err) => {
                toast.error(err.message)
            })
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
                    <Box sx={{ height: '100%' }}>
                        <Box sx={{ px: 2, py: 2, mb: 1 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                }}
                            >
                                <Avatar>
                                    <ChatIcon />
                                </Avatar>
                                <Box sx={{ mt: '3px' }}>
                                    <Typography sx={{ lineHeight: 1 }}>
                                        Chat App
                                    </Typography>
                                    <Typography fontSize="11px">
                                        v{packageJson.version}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                px: 2,
                                mb: 2,
                            }}
                        >
                            <TextField
                                fullWidth
                                placeholder="Find people here.."
                                size="small"
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: 46,
                                        fontSize: '14px',
                                        width: '100%',
                                    },
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                height: '529px',
                                overflowY: 'scroll',
                                '&::-webkit-scrollbar': {
                                    width: '4px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#424242',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#808080',
                                },
                            }}
                        >
                            {conversations?.map((conversation, index) => (
                                <Conversation
                                    key={index}
                                    conversation={conversation}
                                    user={data?.user.user_id === conversation?.user1.id ? conversation.user2 : conversation.user1}
                                    conversationHandler={conversationHandler}
                                    active={
                                        conversation.id === activeConversation
                                    }
                                />
                            ))}
                        </Box>
                        <Divider variant="middle" />
                        <Box
                            sx={{
                                px: '16px',
                                my: '20px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <User />
                            <SettingsIcon />
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={9}>
                    <Box
                        sx={{
                            bgcolor: 'chatBody.light',
                            borderTopRightRadius: '12px',
                            borderBottomRightRadius: '12px',
                            height: '760px',
                        }}
                    >
                        <Box
                            sx={{
                                px: '30px',
                                py: '19px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <SelectedUser
                                user={data?.user.user_id === activeConversationData?.user1?.id ? activeConversationData?.user2 : activeConversationData?.user1} />
                            <DeleteMessage />
                        </Box>
                        <Divider variant="middle" />

                        {/*Message here*/}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column-reverse',
                                padding: '30px',
                                height: '590px',
                                overflowY: 'scroll',
                                '&::-webkit-scrollbar': {
                                    width: '4px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: '#424242',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: '#808080',
                                },
                            }}
                        >
                            {messages?.map((message, index) =>
                                message.sender === data?.user.user_id ? (
                                    <Sender key={index} messages={message} />
                                ) : (
                                    <Receiver key={index} messages={message} />
                                ),
                            )}
                        </Box>

                        <Divider variant="middle" />

                        <Box
                            sx={{ px: '30px', width: '100%', my: '16px' }}
                        >
                            <form onSubmit={handleSubmit(messageSubmit)} style={{ position: 'relative' }}>
                                <TextField
                                    {...register('message', { required: true })}
                                    variant="outlined"
                                    fullWidth
                                    autoFocus
                                    placeholder="Type your message here..."
                                    sx={{
                                        paddingRight: '40px',
                                    }}
                                />
                                <Button type="submit"
                                        sx={{
                                            minWidth: 'auto',
                                        }}
                                        style={{
                                            position: 'absolute',
                                            right: '-10px',
                                            transform: 'translateY(50%)',
                                            top: '-8px',
                                        }}>
                                    <SendIcon />
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Message
