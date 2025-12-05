import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirect } from '@/app/redirects';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // --------------------------------------------------------
  // 1. Auth Protection (محافظت از داشبورد)
  // --------------------------------------------------------
  if (pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('auth_token');

    // اگر توکن وجود نداشت، ریدایرکت به صفحه لاگین
    if (!token) {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // اگر کاربر لاگین بود و خواست به صفحه لاگین برود، به داشبورد بفرستش
  if (pathname === '/login') {
    const token = request.cookies.get('auth_token');
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  // --------------------------------------------------------
  // 2. Redirect Management (کد قبلی شما)
  // --------------------------------------------------------
  const redirectRule = getRedirect(pathname);
  if (redirectRule) {
    const status = redirectRule.permanent ? 301 : 302;
    return NextResponse.redirect(new URL(redirectRule.destination, request.url), { status });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images folder - important!)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};