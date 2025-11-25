import type { Metadata, Viewport } from "next";
import "./globals.css";
// حذف next/font/google چون باعث خطای بیلد در ایران می‌شود
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import { SITE_CONFIG } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#f5569b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | خدمات تخصصی زیبایی`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  keywords: ["سالن زیبایی", "آرایشگاه زنانه", "کاشت ناخن", "رنگ مو", "پاکسازی پوست", "میکاپ عروس"],
  creator: "نام تیم توسعه شما",
  publisher: SITE_CONFIG.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      {/* کلاس font-vazir را اضافه کردیم که در globals.css تعریف شده */}
      <body className="font-vazir antialiased bg-background-light min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </main>
        
        <Footer />
      </body>
    </html>
  );
}