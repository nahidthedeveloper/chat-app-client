import { NextResponse } from 'next/server'

export function middleware(request) {
    const authenticate = request.cookies.get('next-auth.session-token')?.value
    const { nextUrl, url } = request

    const loginUserCanNotAccess = ['/auth/login', '/auth/signup']
    const UnAuthorizeUserCanNotAccess = ['/']

    if (authenticate) {
        if (loginUserCanNotAccess.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL('/', url))
        }
    } else {
        if (UnAuthorizeUserCanNotAccess.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL('/auth/login', url))
        }
    }
}
