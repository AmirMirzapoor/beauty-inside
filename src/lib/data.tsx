/* -------------------------------------------------------------------------- */
/*                       DATA LAYER - CACHED & TYPED                          */
/* -------------------------------------------------------------------------- */

import { cache } from 'react';
import type {
  NavLink,
  Service,
  GalleryImage,
  Artist,
  PortfolioItem,
  SocialLink,
  EnrichedPortfolioItem,
} from '@/components/common/types';
import { GiHairStrands, GiSpikedDragonHead, GiLotus } from 'react-icons/gi';
import { TbBrandDaysCounter } from 'react-icons/tb';
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*                          ICON MAPPER (CLIENT-SIDE)                         */
/* -------------------------------------------------------------------------- */
// ✅ این تابع فقط در کامپوننت‌های کلاینت استفاده شود
export const getServiceIcon = (iconKey: string, size = 30) => {
  const icons: Record<string, React.ReactNode> = {
    'hair': <GiHairStrands size={size} />,
    'nail': <TbBrandDaysCounter size={size} />,
    'makeup': <GiSpikedDragonHead size={size} />,
    'skincare': <GiLotus size={size} />,
  };
  return icons[iconKey] || null;
};

/* -------------------------------------------------------------------------- */
/*                              STATIC DATA                                   */
/* -------------------------------------------------------------------------- */
export const navLinks: NavLink[] = [
  { href: '#home', label: 'صفحه اصلی' },
  { href: '#services', label: 'خدمات ما' },
  { href: '#about', label: 'درباره ما' },
  { href: '#gallery', label: 'گالری' },
  { href: '#contact', label: 'تماس با ما' },
];

export const services: Service[] = [
  { id: 1, slug: 'hair-services', iconKey: 'hair', title: 'خدمات مو', description: 'انواع کوتاهی، رنگ و لایت، کراتین و احیای مو.' },
  { id: 2, slug: 'nail-services', iconKey: 'nail', title: 'خدمات ناخن', description: 'مانیکور، پدیکور، کاشت و طراحی ناخن.' },
  { id: 3, slug: 'makeup-services', iconKey: 'makeup', title: 'میکاپ و گریم', description: 'میکاپ حرفه‌ای عروس، گریم سینمایی.' },
  { id: 4, slug: 'skincare-services', iconKey: 'skincare', title: 'خدمات پوست', description: 'فیشیال تخصصی، پاکسازی و آبرسانی.' },
];

export const galleryImages: GalleryImage[] = [
  { src: '/images/portfolio/im8.jpg', alt: 'مدل مو ۱', priority: true },
  { src: '/images/portfolio/im3.jpg', alt: 'طراحی ناخن' },
  { src: '/images/portfolio/im4.jpg', alt: 'میکاپ حرفه‌ای' },
  { src: '/images/portfolio/im5.jpg', alt: 'مدل مو ۲' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://instagram.com', icon: <FaInstagram size={24} />, label: 'Instagram' },
  { href: 'https://t.me', icon: <FaTelegram size={24} />, label: 'Telegram' },
  { href: 'https://wa.me', icon: <FaWhatsapp size={24} />, label: 'Whatsapp' },
];

export const artists: Artist[] = [
  {
    id: 1,
    slug: 'sara-akbari',
    name: 'سارا اکبری',
    profilePic: '/images/artists/artist1.png',
    specialty: 'متخصص رنگ و لایت',
    bio: 'با بیش از ۱۰ سال تجربه در زمینه جدیدترین تکنیک‌های رنگ مو.',
    rating: 4.9,
    experience: '10 سال',
  },
  {
    id: 2,
    slug: 'maryam-rezaei',
    name: 'مریم رضایی',
    profilePic: '/images/artists/artist2.png',
    specialty: 'ناخن‌کار حرفه‌ای',
    bio: 'متخصص در انواع کاشت ناخن و طراحی‌های مدرن.',
    rating: 4.8,
    experience: '8 سال',
  },
  {
    id: 3,
    slug: 'elham-ghasemi',
    name: 'الهام قاسمی',
    profilePic: '/images/artists/artist3.jpg',
    specialty: 'میکاپ آرتیست',
    bio: 'میکاپ تخصصی عروس و گریم سینمایی.',
    rating: 5.0,
    experience: '12 سال',
  },
];

const portfolioItems: PortfolioItem[] = [
  { id: 1, image: '/images/portfolio/hair1.jpg', serviceSlug: 'hair-services', artistId: 1, createdAt: '2024-01-15' },
  { id: 2, image: '/images/portfolio/hair2.jpg', serviceSlug: 'hair-services', artistId: 1, createdAt: '2024-02-20' },
  { id: 3, image: '/images/portfolio/nail1.jpg', serviceSlug: 'nail-services', artistId: 2, createdAt: '2024-03-10' },
  { id: 4, image: '/images/portfolio/nail2.jpg', serviceSlug: 'nail-services', artistId: 2, createdAt: '2024-03-12' },
  { id: 5, image: '/images/portfolio/nail3.jpg', serviceSlug: 'nail-services', artistId: 2, createdAt: '2024-04-01' },
  { id: 6, image: '/images/portfolio/makeup1.jpg', serviceSlug: 'makeup-services', artistId: 3, createdAt: '2024-04-15' },
  { id: 7, image: '/images/portfolio/makeup2.jpg', serviceSlug: 'makeup-services', artistId: 3, createdAt: '2024-05-20' },
  { id: 8, image: '/images/portfolio/makeup3.jpg', serviceSlug: 'makeup-services', artistId: 3, createdAt: '2024-06-01' },
  { id: 9, image: '/images/portfolio/hair3.jpg', serviceSlug: 'hair-services', artistId: 3, createdAt: '2024-06-10' },
];

/* -------------------------------------------------------------------------- */
/*                         CACHED DATA ACCESSORS                              */
/* -------------------------------------------------------------------------- */
export const getNavLinks = cache((): NavLink[] => navLinks);
export const getServices = cache((): Service[] => services);
export const getGalleryImages = cache((): GalleryImage[] => galleryImages);
export const getSocialLinks = cache((): SocialLink[] => socialLinks);
export const getArtists = cache((): Artist[] => artists);
export const getPortfolioItems = cache((): PortfolioItem[] => portfolioItems);

/* -------------------------------------------------------------------------- */
/*                         SINGLE RECORD FETCHERS                             */
/* -------------------------------------------------------------------------- */
export const getServiceBySlug = cache((slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)
);

export const getArtistById = cache((id: number): Artist | undefined =>
  artists.find((a) => a.id === id)
);

export const getArtistBySlug = cache((slug: string): Artist | undefined =>
  artists.find((a) => a.slug === slug)
);

/* -------------------------------------------------------------------------- */
/*                             FILTERED DATA                                  */
/* -------------------------------------------------------------------------- */
export const getPortfolioItemsByService = cache(
  (slug: string): PortfolioItem[] =>
    portfolioItems.filter((p) => p.serviceSlug === slug)
);

/* -------------------------------------------------------------------------- */
/*                         ENRICHED DATA (COMPOSITE)                          */
/* -------------------------------------------------------------------------- */
export const getEnrichedPortfolioItemsByService = cache(
  (slug: string): EnrichedPortfolioItem[] => {
    const items = getPortfolioItemsByService(slug);
    const service = getServiceBySlug(slug);

    return items.map((item) => ({
      ...item,
      service,
      artist: getArtistById(item.artistId),
    }));
  }
);

/* -------------------------------------------------------------------------- */
/*                      PORTFOLIO FETCHERS BY ARTIST                          */
/* -------------------------------------------------------------------------- */
export const getPortfolioItemsByArtist = cache(
  (slug: string): PortfolioItem[] => {
    const artist = getArtistBySlug(slug);
    if (!artist) return [];
    return portfolioItems.filter((p) => p.artistId === artist.id);
  }
);

export const getEnrichedPortfolioItemsByArtist = cache(
  (slug: string): EnrichedPortfolioItem[] => {
    const items = getPortfolioItemsByArtist(slug);
    return items.map((item) => ({
      ...item,
      artist: getArtistById(item.artistId),
      service: getServiceBySlug(item.serviceSlug),
    }));
  }
);

/* -------------------------------------------------------------------------- */
/*                         STATIC PATH GENERATORS                              */
/* -------------------------------------------------------------------------- */
// ✅ برای generateStaticParams در صفحات داینامیک
export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getAllArtistSlugs = (): string[] => artists.map(a => a.slug);
