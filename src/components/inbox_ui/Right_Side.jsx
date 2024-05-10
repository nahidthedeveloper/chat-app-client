import React, { useState } from 'react'
import Box from '@mui/material/Box'
import SelectedUser from '@/components/SelectedUser'
import DeleteMessage from '@/components/message/DeleteMessage'
import { Button, Divider } from '@mui/material'
import Sender from '@/components/message/Sender'
import Receiver from '@/components/message/Receiver'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'

const RightSide = (props) => {
    const { activeConversationData, messages, messageSubmit, hookForm } = props
    const { register, handleSubmit } = hookForm
    const { data } = useSession()

    return (
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
                    overflow: 'auto',
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
                sx={{ px: '30px', width: '100%', mt: '7px' }}
            >
                <Box sx={{ bgcolor: 'chatBody.main', height: '74px', borderRadius: '10px' }}>
                    <form onSubmit={handleSubmit(messageSubmit)} style={{ position: 'relative' }}>
                        <TextField
                            {...register('message', { required: true })}
                            variant="outlined"
                            fullWidth
                            autoFocus
                            maxRows={2}
                            multiline
                            placeholder="Type a message..."
                            sx={{
                                paddingRight: '40px',
                                '& fieldset': { border: 'none' },
                                '& .MuiInputBase-inputMultiline': {
                                    '&::-webkit-scrollbar': {
                                        width: '3px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        background: '#424242',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#808080',
                                    },
                                },
                            }}
                        />
                        <Button type="submit"
                                sx={{
                                    minWidth: 'auto',
                                }}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    transform: 'translateY(50%)',
                                }}>
                            <SendIcon />
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default RightSide
