'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Chip, Divider, Stack, Toolbar, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import ChatIcon from '@mui/icons-material/Chat'
import packageJson from '../../../../package.json'
import TextField from '@mui/material/TextField'

export default function MessageChild() {
    return (
        <Box sx={{ flexGrow: 1, mt: '10px', bgcolor: '#1E1F22', borderRadius: '20px', padding: '10px' }}>
            <Grid container height="88vh">
                <Grid item xs={12} md={4}>
                    <Box sx={{ height: '100%' }}>
                        <Box sx={{ px: '30px', py: '15px', flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar>
                                    <ChatIcon />
                                </Avatar>
                                <Box sx={{ mt: '3px' }}>
                                    <Typography
                                        sx={{ lineHeight: 1 }}
                                    >
                                        Chat App
                                    </Typography>
                                    <Typography
                                        fontSize="11px"
                                    >
                                        v{packageJson.version}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{px: '30px', py: '10px', display:'grid', gap: '10px'}}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar alt="Remy Sharp"
                                        src="https://scontent.fjsr14-1.fna.fbcdn.net/v/t39.30808-6/431543286_1527318811162112_9202064736696775829_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwbwzjUryv1-QrmzsILS3iLdyEqlZ-EIwt3ISqVn4QjI_Bnu3PfahD7o6ZspBvXYq35uBYrdNgPaS_QT9JOQvS&_nc_ohc=AOSL37FHyi8Q7kNvgHCS5E5&_nc_ht=scontent.fjsr14-1.fna&oh=00_AfCa9Ty56LssBdSA0mwQcXrPJgLaeXTR-JUYFEHTCDuAIw&oe=66347DE2" />
                                <Box sx={{ mt: '3px' }}>
                                    <Typography
                                        sx={{ lineHeight: 1 }}
                                    >
                                        Nahid Hasan
                                    </Typography>
                                    <Typography
                                        fontSize="11px"
                                    >
                                        nahid@gmail.com
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar alt="Remy Sharp"
                                        src="https://scontent.fjsr14-1.fna.fbcdn.net/v/t39.30808-6/431543286_1527318811162112_9202064736696775829_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwbwzjUryv1-QrmzsILS3iLdyEqlZ-EIwt3ISqVn4QjI_Bnu3PfahD7o6ZspBvXYq35uBYrdNgPaS_QT9JOQvS&_nc_ohc=AOSL37FHyi8Q7kNvgHCS5E5&_nc_ht=scontent.fjsr14-1.fna&oh=00_AfCa9Ty56LssBdSA0mwQcXrPJgLaeXTR-JUYFEHTCDuAIw&oe=66347DE2" />
                                <Box sx={{ mt: '3px' }}>
                                    <Typography
                                        sx={{ lineHeight: 1 }}
                                    >
                                        Nahid Hasan
                                    </Typography>
                                    <Typography
                                        fontSize="11px"
                                    >
                                        nahid@gmail.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{
                        bgcolor: '#2B2D31',
                        height: '100%',
                        borderTopRightRadius: '12px',
                        borderBottomRightRadius: '12px',
                    }}>
                        <Box sx={{ px: '30px', py: '15px', flexGrow: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Avatar alt="Remy Sharp"
                                        src="https://scontent.fjsr14-1.fna.fbcdn.net/v/t39.30808-6/431543286_1527318811162112_9202064736696775829_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEwbwzjUryv1-QrmzsILS3iLdyEqlZ-EIwt3ISqVn4QjI_Bnu3PfahD7o6ZspBvXYq35uBYrdNgPaS_QT9JOQvS&_nc_ohc=AOSL37FHyi8Q7kNvgHCS5E5&_nc_ht=scontent.fjsr14-1.fna&oh=00_AfCa9Ty56LssBdSA0mwQcXrPJgLaeXTR-JUYFEHTCDuAIw&oe=66347DE2" />
                                <Box sx={{ mt: '3px' }}>
                                    <Typography
                                        sx={{ lineHeight: 1 }}
                                    >
                                        Nahid Hasan
                                    </Typography>
                                    <Typography
                                        fontSize="11px"
                                    >
                                        nahid@gmail.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Divider variant="middle" color="black" />

                        <Box sx={{ padding: '30px' }} >
                            {/*receiver message*/}
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
                            {/*sender message*/}
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
                            <TextField variant="outlined" placeholder='type your message...' fullWidth />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
