import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }
  const isAuthenticated = false
  const cookies = request.cookies.getAll()
  console.log(request.nextUrl.pathname)
  console.log(cookies)
 
  // If the user is authenticated, continue as normal
  if (isAuthenticated) {
    return NextResponse.next()
  }

  // Redirect to login page if not authenticated
  if (!request.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  } else {
    return NextResponse.next()
  }
}

export const config = { matcher: '/((?!.*\\.).*)' }
