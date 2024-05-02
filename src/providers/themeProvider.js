'use client'
import React, { useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material'
import { useTheme } from 'next-themes'
import Navbar from '@/components/Navbar'

const lightTheme = createTheme({
    typography: {
        "fontFamily": `"Inter", sans-serif`,
    },
    palette: {
        mode: 'light',
        chatBody: {
            main: '#dfe4e6',
            light: '#faeded',
        },
        chat: {
            sender: '#8ac0f4',
        },
        button: 'black',
        conversation: {
            border: 'rgb(212,215,225)',
            hover: '#f3f3f8',
        }
    },
})

const darkTheme = createTheme({
    typography: {
        "fontFamily": `"Inter", sans-serif`,
    },
    palette: {
        mode: 'dark',
        chatBody: {
            main: '#1E1F22',
            light: '#2B2D31',
        },
        chat: {
            sender: '#095eb1',
        },
        button: 'white',
        conversation: {
            border: '#3c3d4140',
            hover: '#3c3d41',
        }
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
