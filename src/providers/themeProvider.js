'use client'
import React, { useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material'
import { useTheme } from 'next-themes'
import Navbar from '@/components/Navbar'

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        chatBody: {
            main: '#dfe4e6',
            light: '#ffffff',
        },
        chat: {
            sender: '#8ac0f4',
        },
    },
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        chatBody: {
            main: '#1E1F22',
            light: '#2B2D31',
        },
        chat: {
            sender: '#095eb1',
        },
    },
})

export default function ThemeProvider({ children }) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const themeMode = theme === 'light' ? lightTheme : darkTheme

    return (
        <MuiThemeProvider theme={themeMode}>
            <CssBaseline />
            <Navbar
                toggleThemeMode={() =>
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                }
                darkMode={theme === 'dark'}
            />
            {children}
        </MuiThemeProvider>
    )
}
