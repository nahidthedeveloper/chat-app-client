'use client'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Toolbar, Typography } from '@mui/material'

export default function MessageChild() {
    return (
        <Box bgcolor="success.main" sx={{ flexGrow: 1, mt: '10px' }}>
            <Grid container height="88vh">
                <Grid item xs={12} md={4}>
                    <Box sx={{ bgcolor: 'blue', height: '100%' }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Chat App
                            </Typography>
                            <div>plus and three dot</div>
                        </Toolbar>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ bgcolor: 'white', height: '100%' }}>
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                            >
                                Sender Name Here
                            </Typography>
                            <div>audio and video call icon</div>
                        </Toolbar>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
