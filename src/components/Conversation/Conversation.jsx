import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const Conversation = ({ conversation, conversationHandler, active, user }) => {
    const { id } = conversation
    const { profile_picture, first_name, last_name } = user
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
                src={`http://localhost:8000${profile_picture}`}
            />
            <Box sx={{ mt: '3px', width: '100%' }}>
                <Typography
                    sx={{ mb: 0.5 }}
                    variant="subtitle2"
                    fontWeight="medium"
                >
                    {first_name} {last_name}
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
                    how are you Hello how are you to
                    fdfmfnjdfsdkjfkdlfjdfhjkldfj
                </Typography>
            </Box>
        </Box>
    )
}

export default Conversation
