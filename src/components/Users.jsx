import React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const Users = () => {
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
                alt="Remy Sharp"
                src="https://scontent.fjsr14-1.fna.fbcdn.net/v/t39.30808-6/431543286_1527318811162112_9202064736696775829_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwbwzjUryv1-QrmzsILS3iLdyEqlZ-EIwt3ISqVn4QjI_Bnu3PfahD7o6ZspBvXYq35uBYrdNgPaS_QT9JOQvS&_nc_ohc=AOSL37FHyi8Q7kNvgHCS5E5&_nc_ht=scontent.fjsr14-1.fna&oh=00_AfCa9Ty56LssBdSA0mwQcXrPJgLaeXTR-JUYFEHTCDuAIw&oe=66347DE2"
            />
            <Box sx={{ mt: '3px' }}>
                <Typography sx={{ lineHeight: 1 }}>Nahid Hasan</Typography>
                <Typography fontSize="11px">nahid@gmail.com</Typography>
            </Box>
        </Box>
    )
}

export default Users
