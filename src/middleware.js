import { NextResponse } from 'next/server';

export function middleware(request) {
    const authenticate = request.cookies.get('next-auth.session-token')?.value;
    const { nextUrl } = request;

    const loginUserCanNotAccess = ['/auth/login', '/auth/signup'];
    const unAuthorizeUserCanNotAccess = ['/'];

    if (authenticate) {
        if (loginUserCanNotAccess.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    } else {
        if (unAuthorizeUserCanNotAccess.includes(nextUrl.pathname)) {
            return NextResponse.redirect(new URL('/auth/login', request.url));
        }
    }
}

export const config = {
    matcher: ['/auth/:path*', '/'],
};
