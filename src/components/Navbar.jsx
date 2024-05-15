'use client'
import React from 'react'
import { AppBar, Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import ThemeButton from './themeButton'
import { signOut, useSession } from 'next-auth/react'

const Navbar = ({ toggleThemeMode, darkMode }) => {
    const { data, status } = useSession()
    return (
        <AppBar position="sticky" sx={{ py: '20px', top: 0 }}>
            <Box className="nav" display="flex" alignItems="center">
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        Chat App
                    </Link>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
                    <Link href={'/about'}>
                        <Button variant="text" color="inherit">
                            About
                        </Button>
                    </Link>
                </Box>
                <ThemeButton
                    darkMode={darkMode}
                    toggleThemeMode={toggleThemeMode}
                />
                {status === 'authenticated' ? (
                    <Button
                        variant="contained"
                        sx={{ ml: '30px', bgcolor: 'button' }}
                        size="small"
                        onClick={() => signOut()}
                    >
                        Logout
                    </Button>
                ) : (
                    <Box sx={{ display: 'flex', gap: 3, pl: 3 }}>
                        <Link href={'/auth/login'}>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: 'button' }}
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href={'/auth/signup'}>
                            <Button
                                variant="contained"
                                sx={{ bgcolor: 'button' }}
                            >
                                Signup
                            </Button>
                        </Link>
                    </Box>
                )}
            </Box>
        </AppBar>
    )
}

export default Navbar
