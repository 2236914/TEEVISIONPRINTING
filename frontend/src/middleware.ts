import { type NextRequest, NextResponse } from 'next/server';

import { authenticatedUser } from '@/app/amplify/amplify-server-utils';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers();
  const ip =
    request.headers.get('x-forwarded-for') || request.ip || 'Unknown IP';
  requestHeaders.set('X-client-identity', ip);
  
  const response = NextResponse.next({
    headers: requestHeaders,
  });
  
  const user = await authenticatedUser({ request, response });
  
  if (user?.tokens?.accessToken) {
    response.cookies.set('accessToken', user.tokens.accessToken.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });
  }
  
  const isOnLoginPage = request.nextUrl.pathname.startsWith('/admin/login');
  
  if (
    !user &&
    request.nextUrl.pathname.startsWith('/admin') &&
    !isOnLoginPage
  ) {
    return NextResponse.redirect(new URL('/admin/login', request.nextUrl));
  }
  
  if (user && isOnLoginPage) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }
  
  // Don't set Cache-Control here - let next.config.mjs handle it
  // But for admin pages, explicitly prevent caching
  if (request.nextUrl.pathname.startsWith('/admin')) {
    response.headers.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  }
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};