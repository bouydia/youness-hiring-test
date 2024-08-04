import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const isBot = userAgent(request).isBot
    if (isBot) {
        return NextResponse.rewrite(new URL('/access-denied', request.url))
    }

 return NextResponse.next()
}


export const config = {
    matcher:'/:path*'
}