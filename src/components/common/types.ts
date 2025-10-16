import type { ReactNode } from "react";

// لینک‌های ناوبری (navbar)
export interface NavLink {
  href: string;
  label: string;
}

// خدمات (Services)
export interface Service {
  id: number;
  slug: string;
  icon: ReactNode;
  title: string;
  description: string;
}

// تصاویر گالری
export interface GalleryImage {
  src: string;
  alt: string;
}

// شبکه‌های اجتماعی
export interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
}

// هنرمندان (Artists)
export interface Artist {
  id: number;
  name: string;
  profilePic: string; // مسیر عکس پروفایل
  specialty: string; // تخصص
  bio: string;
  rating: number; // میانگین امتیاز از ۵
}

// نمونه‌کارها (Portfolio)
export interface PortfolioItem {
  id: number;
  image: string; // مسیر عکس نمونه کار
  serviceSlug: string; // به کدام خدمت مرتبط است
  artistId: number; // شناسه هنرمند
}
