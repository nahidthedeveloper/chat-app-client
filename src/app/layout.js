import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from '@/providers/SessionProvider'
import { TokenProvider } from '@/context/tokenContext'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import ThemeProvider from '@/providers/themeProvider'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Chat App',
    description: 'Generated by Nahid Hasan',

}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        </head>
        <body className={inter.className}>
        <NextThemeProvider defaultTheme="dark">
            <AppRouterCacheProvider options={{ key: 'css' }}>
                <ThemeProvider>
                    <SessionProvider>
                    <TokenProvider>
                            <div className="layout">
                            {children}
                                <ToastContainer />
                            </div>
                        </TokenProvider>
                    </SessionProvider>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </NextThemeProvider>
        </body>
        </html>
    )
}
