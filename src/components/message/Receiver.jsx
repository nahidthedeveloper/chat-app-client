import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

const Receiver = () => {
    return (
        <Box sx={{ maxWidth: '80%' }}>
            <Typography sx={{
                lineHeight: '20px',
                bgcolor: '#1E1F22',
                px: '10px',
                py: '10px',
                borderRadius: '10px',
                fontSize: '14px',
            }}>
                Hello how are you Hello how are you Hello how are you Hello how are you Hello how
                are youHello how are you Hello how are youHello how are
            </Typography>
            <Typography sx={{
                lineHeight: '20px',
                px: '10px',
                fontSize: '10px',
            }}>
                02:30 PM
            </Typography>
        </Box>
    )
}

export default Receiver
