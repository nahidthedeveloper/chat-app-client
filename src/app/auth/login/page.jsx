'use client'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Copyright from '@/components/Copyright'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/components/validators'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'

export default function SignIn() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        mode: 'onTouched',
        resolver: yupResolver(loginSchema),
    })

    const submitForm = (data) => {
        signIn('credentials', {
            email: data?.email,
            password: data?.password,
            redirect: false,
        }).then((response) => {
            if (response?.error) {
                try {
                    const errors = JSON.parse(response.error)
                    errors.map((e) => {
                        return setError(e.name, {
                            type: 'manual',
                            message: e.message[0],
                        })
                    })
                } catch (error) {
                    toast.error('Internal server error!')
                }
            } else {
                toast.success('Login Successful')
                router.push(callbackUrl ? callbackUrl : '/')
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(submitForm)}
                    noValidate
                    sx={{ mt: 1 }}
                    width="100%"
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        error={!!errors.email}
                        {...register('email')}
                    />
                    <Typography variant="body2" color="red" mx="4px">
                        {errors.email?.message}
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={!!errors.password}
                        {...register('password')}
                    />
                    <Typography variant="body2" color="red" mx="4px">
                        {errors.password?.message}
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#">
                                <Typography variant="body2">
                                    Forgot password?
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={'/auth/signup/'}>
                                <Typography variant="body2">
                                    {'Don\'t have an account? Sign Up'}
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}
