'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Divider, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ChatIcon from '@mui/icons-material/Chat'
import SettingsIcon from '@mui/icons-material/Settings'
import packageJson from '../../../package.json'
import Conversation from '@/components/Conversation/Conversation'
import Receiver from '@/components/message/Receiver'
import Sender from '@/components/message/Sender'
import TextField from '@mui/material/TextField'
import User from '@/components/User'
import DeleteMessage from '@/components/message/DeleteMessage'

export default function MessageChild() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                mt: '10px',
                bgcolor: 'chatBody.main',
                borderRadius: '20px',
            }}
        >
            <Grid container height="88vh">
                <Grid item xs={12} md={3}>
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
                        <Box sx={{
                            px: 2,
                            mb: 2,
                        }}>
                            <TextField
                                fullWidth
                                placeholder="Find people here.."
                                size="small"
                                sx={{
                                    '& .MuiInputBase-root': { height: 46, fontSize: '14px', width: '100%' },
                                }}
                            />
                        </Box>
                        <Box
                            sx={{

                                maxHeight: '63.5vh',
                                height: '100%',
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
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                        </Box>
                        <Divider variant="middle" />
                        <Box
                            sx={{
                                px: '16px',
                                mt: '20px',
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

                <Grid item xs={12} md={9}>
                    <Box
                        sx={{
                            bgcolor: 'chatBody.light',
                            height: '100%',
                            borderTopRightRadius: '12px',
                            borderBottomRightRadius: '12px',
                        }}
                        style={{
                            position: 'relative',
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
                            <User />
                            <DeleteMessage />
                        </Box>
                        <Divider variant="middle" />

                        {/*Message here*/}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column-reverse',
                                padding: '30px',
                                maxHeight: '70vh',
                                height: '100%',
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
                            <Sender />
                            <Receiver />
                            <Sender />
                            <Receiver />
                            <Sender />
                            <Receiver />
                            <Sender />
                            <Receiver />
                            <Sender />
                        </Box>

                        <Divider variant="middle" />

                        <Box
                            sx={{ px: '30px', width: '100%' }}
                            style={{
                                position: 'absolute',
                                bottom: '10px',
                            }}
                        >
                            <TextField
                                maxRows="2"
                                multiline
                                fullWidth
                                placeholder="type your message..."
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
