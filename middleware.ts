import { createCheckout } from '@src/lib/dutchie/checkout';
import { getSessionData } from '@src/lib/session/getSession';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await getSessionData();
  if (pathname.startsWith('/admin')) {
    if (!pathname.startsWith('/admin/login') && !session.loggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}