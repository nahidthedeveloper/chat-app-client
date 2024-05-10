import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@mui/material'

const SearchUser = ({ user }) => {
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
                '&:hover': {
                    backgroundColor: 'conversation.hover',
                    transition: 'all 0.3s ease-in-out',
                },
            }}
            // bgcolor={'conversation.hover'}
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
            </Box>
        </Box>
    )
}

export default SearchUser
