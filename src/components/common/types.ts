/**
 * Global Type Definitions
 * @version 1.0.0
 */

// NAVIGATION
export type NavLink = {
  href: string;
  label: string;
};

// SERVICES
export interface Service {
  id: number;
  slug: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

// ARTISTS
export interface Artist {
  id: number;
  slug: string;
  name: string;
  profilePic: string;
  specialty: string;
  bio: string;
  rating: number;
  experience?: string; // ✅ اضافه کردن فیلد مفید
}

// PORTFOLIO
export interface PortfolioItem {
  id: number;
  image: string;
  serviceSlug: string;
  artistId: number;
  alt?: string;
  createdAt?: string; // ✅ برای مرتب‌سازی زمانی
}

export type EnrichedPortfolioItem = PortfolioItem & {
  artist?: Artist;
  service?: Service;
};

// GALLERY
export interface GalleryImage {
  src: string;
  alt: string;
  priority?: boolean;
}

// SOCIAL
export interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}