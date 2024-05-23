'use client'
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { formattedDateTime } from '@/utils/formattedDateTime'
import { decrypt } from '@/utils/crypto-AES'

const Sender = ({ messages }) => {
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
        <Box display="flex" flexDirection="row-reverse">
            <Box
                sx={{
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
                    {decryptedMessage}
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
