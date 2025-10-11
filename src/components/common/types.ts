import type { ReactNode } from 'react';

// انواع داده موجود
export type NavLink = {
  href: string;
  label: string;
};

export type Service = {
  id: number;
  slug: string; // کلید برای استفاده در URL
  icon: ReactNode;
  title: string;
  description: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type SocialLink = {
    href: string;
    icon: ReactNode;
    label: string;
};

// --- انواع داده جدید ---
export type Artist = {
    id: number;
    name: string;
    profilePic: string; // مسیر عکس پروفایل
    specialty: string;  // تخصص اصلی
    bio: string;
    rating: number; // میانگین امتیاز از ۵
};

export type PortfolioItem = {
    id: number;
    image: string; // مسیر عکس نمونه کار
    serviceSlug: string; // به کدام خدمت مرتبط است
    artistId: number;   // کدام هنرمند این کار را انجام داده
};
