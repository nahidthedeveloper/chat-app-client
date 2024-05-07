import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const SelectedUser = () => {
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
                src=""
            />
            <Box sx={{ mt: '3px', width: '100%' }}>
                <Typography variant="subtitle2" fontWeight="medium">
                    Hello
                </Typography>
                <Typography fontSize={12} fontWeight="normal">
                    Hello@gmail.com
                </Typography>
            </Box>
        </Box>
    )
}

export default SelectedUser
