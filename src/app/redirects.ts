/**
 * لیست ریدایرکت‌های دائمی (۳۰۱) برای مسیرهای قدیمی یا اشتباه
 * می‌توانید این لیست را هر زمان گسترش دهید
 */

interface RedirectRule {
    source: string; // مسیر قدیمی (بدون /)
    destination: string; // مسیر جدید
    permanent?: boolean; // true = 301, false = 302
  }
  
  export const redirectRules: RedirectRule[] = [
    // مثال: اگر قبلاً از /old-hair به /services/hair-services تغییر کرده
    {
      source: 'old-hair',
      destination: '/services/hair-services',
      permanent: true,
    },
    {
      source: 'old-nail',
      destination: '/services/nail-services',
      permanent: true,
    },
    // ریدایرکت صفحه اصلی اشتباه
    {
      source: 'home',
      destination: '/',
      permanent: true,
    },
  ];
  
  // تابعی برای یافتن ریدایرکت (استفاده در middleware)
  export function getRedirect(pathname: string): RedirectRule | null {
    const cleanPath = pathname.replace(/^\//, ''); // حذف اسلش اول
    return redirectRules.find(rule => rule.source === cleanPath) || null;
  }