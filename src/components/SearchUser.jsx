import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Button, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'

const SearchUser = ({
                        user,
                        createConversationHandler,
                        acceptConversationHandler,
                        deleteConversationHandler,
                        searchUserHandler,
                    }) => {
    const { data } = useSession()
    let ids = data?.user?.user_id
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                p: 2,
                cursor: 'pointer',
                borderBottom: '1px solid',
                borderColor: 'conversation.border',
                overflow: 'hidden',
            }}
        >
            <Avatar
                alt="User"
                src={user?.profile_picture}
            />
            <Box sx={{ mt: '3px', width: '100%' }}>
                <Typography
                    sx={{
                        mb: 0.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                    }}
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
                    {user?.email}
                </Typography>
                {/*ok*/}
                {(user?.is_friend && !user?.is_pending) && <Typography fontSize="10px">Your Friend</Typography>}

                <Box sx={{ mt: '6px', width: '100%' }}>
                    {/*ok*/}
                    {(user?.requester === data?.user?.user_id && user?.is_pending) &&
                        <Box sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                            <Button onClick={async () => {
                                await deleteConversationHandler(user?.conversation_id)
                                await searchUserHandler()
                            }} variant="contained"
                                    color="error"
                                    size="small"
                                    sx={{ textTransform: 'capitalize' }}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="success" size="small"
                                    sx={{ textTransform: 'capitalize'}}
                                    disabled
                            >
                                Requested
                            </Button>
                        </Box>
                    }

                    {(!user?.is_friend && !user?.requester) &&
                        <Button onClick={async () => {
                            await createConversationHandler(user?.id)
                            await searchUserHandler()
                        }} variant="contained" color="info"
                                size="small" sx={{ textTransform: 'capitalize' }}>
                            Add Friend
                        </Button>
                    }
                    {((user?.requester && user?.requester !== data?.user?.user_id) && user?.is_pending) &&
                        <Box onClick={async () => {
                            await deleteConversationHandler(user?.conversation_id)
                            await searchUserHandler()
                        }}
                             sx={{ width: '100%', display: 'flex', gap: '12px' }}>
                            <Button variant="contained" color="error" size="small"
                                    sx={{ textTransform: 'capitalize' }}>
                                Reject
                            </Button>
                            <Button onClick={async () => {
                                await searchUserHandler()
                                await acceptConversationHandler(user?.conversation_id, user?.requester)
                            }}
                                    variant="contained" color="success" size="small"
                                    sx={{ textTransform: 'capitalize' }}>
                                Accept
                            </Button>
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default SearchUser
