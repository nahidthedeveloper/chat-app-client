import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { formattedDateTime } from '@/utils/formattedDateTime'

const Receiver = ({ messages }) => {
    const { message, timestamp } = messages
    return (
        <Box sx={{ maxWidth: '80%', py: '6px' }}>
            <Typography
                sx={{
                    lineHeight: '20px',
                    bgcolor: 'chatBody.main',
                    px: '10px',
                    py: '10px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    wordWrap: 'break-word',
                    display: 'inline-block',
                    maxWidth: '100%',
                }}
            >
                {message}
            </Typography>
            <Typography
                sx={{
                    lineHeight: '20px',
                    px: '10px',
                    fontSize: '10px',
                }}
            >
                {formattedDateTime(timestamp)}
            </Typography>
        </Box>
    )
}

export default Receiver
