import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'

const Conversation = ({ conversation, conversationHandler, active, user }) => {
    const { data } = useSession()
    const { id, requester, is_friend, is_pending } = conversation
    return (
        <Box
            onClick={() => conversationHandler(id)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                p: 2,
                borderBottom: '1px solid',
                borderColor: 'conversation.border',
                '&:hover': {
                    backgroundColor: 'conversation.hover',
                    transition: 'all 0.3s ease-in-out',
                },
            }}
            bgcolor={active && 'conversation.hover'}
        >
            <Avatar
                alt="User"
                src={`http://localhost:8000${user?.profile_picture}`}
            />
            <Box sx={{ mt: '3px', width: '100%' }}>
                <Typography
                    sx={{ mb: 0.5 }}
                    variant="subtitle2"
                    fontWeight="medium"
                >
                    {user?.first_name} {user?.last_name}
                </Typography>
                <Typography
                    fontSize={12}
                    fontWeight="normal"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    last sms here
                </Typography>
                {
                    !is_friend &&
                    <Box sx={{ mt: '6px', width: '100%' }}>
                        {(requester === data?.user?.user_id && is_pending) &&
                            <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                                <Button variant="contained" color="error" size="small"
                                        sx={{ textTransform: 'capitalize' }}>
                                    Cancel
                                </Button>
                                <Button variant="contained" color="success" size="small"
                                        sx={{ textTransform: 'capitalize' }}
                                        disabled
                                >
                                    Requested
                                </Button>
                            </Box>
                        }
                        {(requester !== data?.user?.user_id && is_pending) &&
                            <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                                <Button variant="contained" color="error" size="small"
                                        sx={{ textTransform: 'capitalize' }}>
                                    Reject
                                </Button>
                                <Button variant="contained" color="success" size="small"
                                        sx={{ textTransform: 'capitalize' }}>
                                    Accept
                                </Button>
                            </Box>
                        }
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default Conversation
