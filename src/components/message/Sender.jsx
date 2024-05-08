import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { formattedDateTime } from '@/utils/formattedDateTime'

const Sender = ({ messages }) => {
    const { message, timestamp } = messages
    return (
        <Box display="flex" flexDirection="row-reverse">
            <Box sx={{
                maxWidth: '80%',
                py: '6px',
                textAlign: 'right',
            }}
            >
                <Typography
                    sx={{
                        lineHeight: '20px',
                        bgcolor: 'chat.sender',
                        px: '10px',
                        py: '10px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        wordWrap: 'break-word',
                        display: 'inline-block',
                        maxWidth: '100%',
                        textAlign: 'left',
                    }}
                >
                    {message}
                </Typography>
                <Typography
                    sx={{
                        lineHeight: '20px',
                        px: '10px',
                        fontSize: '10px',
                        textAlign: 'right',
                    }}
                >
                    {formattedDateTime(timestamp)}
                </Typography>
            </Box>
        </Box>
    )
}

export default Sender
