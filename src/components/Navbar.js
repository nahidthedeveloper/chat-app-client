import React from 'react'
import { AppBar, Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import ThemeButton from './themeButton'

const Navbar = ({ toggleThemeMode, darkMode }) => {
    const navLink = [
        { title: 'Inbox', path: '/messages/1' },
        { title: 'About', path: '/about' },
    ]
    return (
        <AppBar position="static" sx={{ py: '20px' }}>
            <Box className="nav" display="flex" alignItems="center">
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        Chat App
                    </Link>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
                    {navLink.map(({ title, path }, index) => (
                        <Link href={path} key={index}>
                            <Button variant="text" color="inherit">
                                {title}
                            </Button>
                        </Link>
                    ))}
                </Box>
                <ThemeButton
                    darkMode={darkMode}
                    toggleThemeMode={toggleThemeMode}
                />
                <Box sx={{ display: 'flex', gap: 3, pl: 3 }}>
                    <Link href="/auth/login">
                        <Button variant="contained" color="inherit">
                            Login
                        </Button>
                    </Link>
                    <Link href="/auth/signup">
                        <Button variant="contained" color="inherit">
                            Signup
                        </Button>
                    </Link>
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navbar
