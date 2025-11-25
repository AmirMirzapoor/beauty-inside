import type { Metadata } from 'next';
import NotFoundHero from '@/components/not-found/NotFoundHero';
import HelpfulLinks from '@/components/not-found/HelpfulLinks';
import StructuredData from '@/components/common/StructuredData';

export const metadata: Metadata = {
  title: 'صفحه‌ای که دنبال آن بودید پیدا نشد | سالن زیبایی اینساید',
  description: 'شاید آدرس را اشتباه وارد کرده‌اید. اینجا را ببینید یا به صفحه اصلی برگردید.',
  alternates: {
    canonical: '/404',
  },
  openGraph: {
    title: 'خطای ۴۰۴ - سالن زیبایی اینساید',
    description: 'صفحه‌ای که دنبالش بودید اینجا نیست، ولی ما شما را به جای درست راهنمایی می‌کنیم.',
    url: '/404',
    siteName: 'سالن زیبایی اینساید',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function NotFoundPage() {
  return (
    <main className="bg-background-light min-h-screen pt-24">
      <StructuredData type={'Organization'} />
      <div className="container mx-auto px-6 py-16 text-center">
        <NotFoundHero />
        <HelpfulLinks />
      </div>
    </main>
  );
}