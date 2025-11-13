import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirect } from '@/app/redirects';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // بررسی ریدایرکت
  const redirect = getRedirect(pathname);
  if (redirect) {
    const status = redirect.permanent ? 301 : 302;
    return NextResponse.redirect(new URL(redirect.destination, request.url), { status });
  }

  // ادامه به صفحه
  return NextResponse.next();
}

// ✅ فقط مسیرهای خاص را مانیتور کن (برای بهینگی)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};