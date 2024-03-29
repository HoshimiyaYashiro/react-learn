import createIntlMiddleware from 'next-intl/middleware';
import {locales} from './navigation';
import { NextRequest, NextResponse } from 'next/server';

// export default createIntlMiddleware({
//   locales,
//   defaultLocale: 'en'
// });

const publicPages = [
  '/auth'
];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: 'always',
  defaultLocale: 'en'
});

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    console.log('go', req.nextUrl.pathname)
    return intlMiddleware(req);
  } else {
    console.log('router', req.nextUrl.pathname)
    return NextResponse.redirect(new URL('/en/auth', req.url))
  }
}

export const config = {
  // Skip all non-content paths
  matcher: ['/((?!.*\\.).*)', '/(en|vi)/:path*']
};
// export const config = { matcher: ['/((?!.*\\.).*)', '/(vi|en)/:path*'] }
