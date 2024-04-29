'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Divider, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ChatIcon from '@mui/icons-material/Chat'
import SettingsIcon from '@mui/icons-material/Settings'
import CallIcon from '@mui/icons-material/Call'
import VideocamIcon from '@mui/icons-material/Videocam'
import packageJson from '../../../../package.json'
import Users from '@/components/Users'
import Receiver from '@/components/message/Receiver'
import Sender from '@/components/message/Sender'
import TextField from '@mui/material/TextField'


export default function MessageChild() {
    return (
        <Box sx={{ flexGrow: 1, mt: '10px', bgcolor: '#1E1F22', borderRadius: '20px', padding: '10px' }}>
            <Grid container height="88vh">
                <Grid item xs={12} md={4}>
                    <Box sx={{ height: '100%' }}>
                        <Box sx={{ px: '30px', py: '15px', flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar>
                                    <ChatIcon />
                                </Avatar>
                                <Box sx={{ mt: '3px' }}>
                                    <Typography
                                        sx={{ lineHeight: 1 }}
                                    >
                                        Chat App
                                    </Typography>
                                    <Typography
                                        fontSize="11px"
                                    >
                                        v{packageJson.version}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{
                            px: '30px',
                            py: '20px',
                            display: 'grid',
                            gap: '16px',
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
                        }}>
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                            <Users />
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{
                            px: '30px',
                            mt: '30px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Users />
                            <SettingsIcon disabled />
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Box sx={{
                        bgcolor: '#2B2D31',
                        height: '100%',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                    }}
                         style={{
                             position: 'relative',
                         }}
                    >
                        <Box sx={{
                            px: '30px',
                            py: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Users />
                            <Box sx={{
                                display: 'flex',
                                gap: '20px',
                                alignItems: 'center',
                            }}>
                                <CallIcon fontSize="medium" cursor="pointer" />
                                <VideocamIcon fontSize="large" cursor="pointer" />
                            </Box>

                        </Box>
                        <Divider variant="middle" color="black" />

                        {/*Message here*/}
                        <Box sx={{
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
                        }}>
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

                        <Divider variant="middle" color="black" />

                        <Box sx={{ px: '30px', width: '100%' }} style={{
                            position: 'absolute',
                            bottom: '10px',
                        }}>
                            <TextField maxRows="2" multiline fullWidth placeholder="type your message..." />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
