'use client'
import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { formattedDateTime } from '@/utils/formattedDateTime'
import { decrypt } from '@/utils/crypto-AES'

const Receiver = ({ messages }) => {
    const { message, timestamp } = messages
    const [decryptedMessage, setDecryptedMessage] = useState(null)

    useEffect(() => {
        const decryptMessage = async () => {
            try {
                setDecryptedMessage(await decrypt(message))
            } catch (error) {
                console.error('Error decrypting message:', error)
            }
        }
        decryptMessage()

        return () => {
            setDecryptedMessage(null)
        }
    }, [message])

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
                {decryptedMessage}
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

