import React, { useContext, useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { httpClient } from '@/utils/api'
import { toast } from 'react-toastify'
import { TokenContext } from '@/context/tokenContext'

const User = () => {
    const tokenContext = useContext(TokenContext)
    const [user, setUser] = useState()

    useEffect(() => {
        if (tokenContext === 'added') {
            httpClient
                .get(`/profile/`)
                .then((response) => {
                    setUser(response.data)
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
    }, [tokenContext])

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
                src={user && user[0].profile_picture}
            />
            <Box sx={{ mt: '3px', width: '100%' }}>
                <Typography variant="subtitle2" fontWeight="medium">
                    {user && user[0].first_name} {user && user[0].last_name}
                </Typography>
                <Typography fontSize={12} fontWeight="normal">
                    {user && user[0].email}
                </Typography>
            </Box>
        </Box>
    )
}

export default User
