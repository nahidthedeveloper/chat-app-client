import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ChatIcon from '@mui/icons-material/Chat'
import packageJson from '../../../package.json'
import TextField from '@mui/material/TextField'
import Conversation from '@/components/Conversation/Conversation'
import User from '@/components/User'
import SettingsIcon from '@mui/icons-material/Settings'
import { useSession } from 'next-auth/react'
import SearchUser from '@/components/SearchUser'
import ClearIcon from '@mui/icons-material/Clear'


const LeftSide = (props) => {
    const {
        conversations,
        activeConversation,
        oneConversationGetHandler,
        createConversationHandler,
        acceptConversationHandler,
        deleteConversationHandler,
        searchUserHandler,
        filterUser,
        setFilterUser,
        searchText,
        setSearchText,
    } = props
    const { data } = useSession()

    const [isOpen, setIsOpen] = useState(false)
    let menuRef = useRef()

    let handleClickOutside = (e) => {
        if (!menuRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })


    return (
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
                <Box sx={{ position: 'relative' }}>
                    <TextField
                        value={searchText}
                        onFocus={() => setIsOpen(true)}
                        onChange={e => {
                            setSearchText(e.target.value)
                            searchUserHandler()
                        }}
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
                    <Button
                        onClick={() => {
                            setSearchText('')
                            setFilterUser('')
                        }}
                        sx={{
                            position: 'absolute',
                            right: '6px',
                            minWidth: 'auto',
                            transform: 'translateY(50%)',
                            top: '-13px',
                        }}
                    >
                        <ClearIcon />
                    </Button>
                    <Box ref={menuRef} sx={{
                        zIndex: '100',
                        position: 'absolute',
                        bgcolor: 'chatBody.light',
                        width: '100%',
                    }}>
                        {(filterUser && isOpen) &&
                            <Box sx={{
                                zIndex: '100',
                                position: 'absolute',
                                bgcolor: 'chatBody.light',
                                width: '100%',
                                maxHeight: '400px',
                                mt: '4px',
                                overflow: 'auto',
                                wordWrap: 'break-word',
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
                                {
                                    filterUser.map((user, index) =>
                                        <SearchUser key={index} user={user}
                                                    createConversationHandler={createConversationHandler}
                                                    acceptConversationHandler={acceptConversationHandler}
                                                    deleteConversationHandler={deleteConversationHandler}
                                                    searchUserHandler={searchUserHandler}
                                        />,
                                    )
                                }
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    height: '529px',
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
                {conversations?.map((conversation, index) => (
                    <Conversation
                        key={index}
                        conversation={conversation}
                        user={data?.user.user_id === conversation?.user1?.id ? conversation.user2 : conversation.user1}
                        oneConversationGetHandler={oneConversationGetHandler}
                        acceptConversationHandler={acceptConversationHandler}
                        deleteConversationHandler={deleteConversationHandler}
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
    )
}

export default LeftSide
