import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const SelectedUser = ({ user }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
            }}
        >
            <Avatar
                alt="User"
                src={`http://localhost:8000${user?.profile_picture}`}
            />
            <Box sx={{ mt: '3px', width: '100%' }}>
                <Typography variant="subtitle2" fontWeight="medium">
                    {user?.first_name} {user?.last_name}
                </Typography>
                <Typography fontSize={12} fontWeight="normal">
                    {user?.email}
                </Typography>
            </Box>
        </Box>
    )
}

export default SelectedUser
