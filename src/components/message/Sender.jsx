import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const Sender = () => {
    return (
        <Box display="flex" flexDirection="row-reverse">
            <Box sx={{ maxWidth: '80%' }}>
                <Typography sx={{
                    lineHeight: '20px',
                    bgcolor: '#1976D2',
                    px: '10px',
                    py: '10px',
                    borderRadius: '10px',
                    fontSize: '14px',
                }}>
                    Hello how are you Hello how are you Hello how are you Hello how are you Hello
                    how
                    are youHello how are you Hello how are youHello how are
                </Typography>
                <Typography sx={{
                    lineHeight: '20px',
                    px: '10px',
                    fontSize: '10px',
                    textAlign: 'right',
                }}>
                    02:30 PM
                </Typography>
            </Box>
        </Box>
    )
}

export default Sender
