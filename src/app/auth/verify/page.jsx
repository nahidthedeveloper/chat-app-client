'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { httpClient } from '@/utils/api'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

const Verify = () => {
    const searchParams = useSearchParams()
    const uid = searchParams.get('uid')
    const token = searchParams.get('token')

    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        if (uid && token) {
            let payload = {
                uid,
                token,
            }
            httpClient
                .post('auth/verify/', payload)
                .then((res) => {
                    toast.success(res.data.message)
                    router.push('/auth/login/')
                })
                .catch((err) => {
                    const { data: errors } = err.response

                    if ('non_field_errors' in errors) {
                        toast.error(errors.non_field_errors[0])
                    } else {
                        toast.error('Internal server error!')
                    }
                    router.push('/auth/signup')
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            toast.error('Invalid account activation URL!')
            router.push('/auth/signup')
        }
    }, [uid, token, router])

    return (
        <div className="w-full mt-5 flex flex-col items-center">
            {loading ? 'Loading...' : ''}
        </div>
    )
}

export default Verify
