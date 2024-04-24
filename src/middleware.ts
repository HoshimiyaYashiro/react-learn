import createIntlMiddleware from 'next-intl/middleware';
import { locales } from './navigation';
import { NextRequest, NextResponse } from 'next/server';
import { getServerUser } from './app/utils/amplifyServerUtils';

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: 'always',
  defaultLocale: 'en'
});

const publicPages: string[] = [
  '/auth'
]

export default async function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages.flatMap((p) => (p === "/" ? ["", "/"] : p)).join("|")})/?$`,
    "i"
  )
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    const user = await getServerUser()
    console.log(user)

    if (user) {
      return intlMiddleware(req)
    } else {
      return NextResponse.redirect(new URL('/auth', req.url))
    }
    // return (authMiddleware as any)(req)
  }
}

export const config = {
  // Skip all non-content paths
  matcher: ['/((?!api|.*\\.).*)']
};