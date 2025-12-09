/* -------------------------------------------------------------------------- */
/* DATA LAYER - COMPLETE & TYPED                        */
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
/* ICON MAPPER (CLIENT-SIDE)                         */
/* -------------------------------------------------------------------------- */
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
/* STATIC DATA                                   */
/* -------------------------------------------------------------------------- */
export const navLinks: NavLink[] = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/#services', label: 'خدمات ما' },
  { href: '/#about', label: 'درباره ما' },
  { href: '/gallery', label: 'گالری' },
  { href: '/blog', label: 'وبلاگ' }, // لینک وبلاگ اضافه شد
  { href: '/#contact', label: 'تماس با ما' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://instagram.com', icon: <FaInstagram size={24} />, label: 'Instagram' },
  { href: 'https://t.me', icon: <FaTelegram size={24} />, label: 'Telegram' },
  { href: 'https://wa.me', icon: <FaWhatsapp size={24} />, label: 'Whatsapp' },
];

export const services: Service[] = [
  { id: 1, slug: 'hair-services', iconKey: 'hair', title: 'خدمات مو', description: 'انواع کوتاهی، رنگ و لایت، کراتین و احیای مو.', price: 2500000 },
  { id: 2, slug: 'nail-services', iconKey: 'nail', title: 'خدمات ناخن', description: 'مانیکور، پدیکور، کاشت و طراحی ناخن.', price: 450000 },
  { id: 3, slug: 'makeup-services', iconKey: 'makeup', title: 'میکاپ و گریم', description: 'میکاپ حرفه‌ای عروس، گریم سینمایی.', price: 350000 },
  { id: 4, slug: 'skincare-services', iconKey: 'skincare', title: 'خدمات پوست', description: 'فیشیال تخصصی، پاکسازی و آبرسانی.', price: 800000 },
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
  { id: 1, image: '/images/portfolio/hair1.jpg', serviceSlug: 'hair-services', artistId: 1, createdAt: '2024-01-15', alt: 'رنگ موی آمبره دودی' },
  { id: 2, image: '/images/portfolio/hair2.jpg', serviceSlug: 'hair-services', artistId: 1, createdAt: '2024-02-20', alt: 'بالیاژ کاراملی' },
  { id: 3, image: '/images/portfolio/nail1.jpg', serviceSlug: 'nail-services', artistId: 2, createdAt: '2024-03-10', alt: 'کاشت ناخن هلویی' },
  { id: 4, image: '/images/portfolio/nail2.jpg', serviceSlug: 'nail-services', artistId: 2, createdAt: '2024-03-12', alt: 'طراحی ناخن مینیمال' },
  { id: 5, image: '/images/portfolio/nail3.jpg', serviceSlug: 'nail-services', artistId: 2, createdAt: '2024-04-01', alt: 'لمینت ناخن طبیعی' },
  { id: 6, image: '/images/portfolio/makeup1.jpg', serviceSlug: 'makeup-services', artistId: 3, createdAt: '2024-04-15', alt: 'میکاپ لایت اروپایی' },
  { id: 7, image: '/images/portfolio/makeup2.jpg', serviceSlug: 'makeup-services', artistId: 3, createdAt: '2024-05-20', alt: 'میکاپ اسموکی' },
  { id: 8, image: '/images/portfolio/makeup3.jpg', serviceSlug: 'makeup-services', artistId: 3, createdAt: '2024-06-01', alt: 'گریم سینمایی' },
  { id: 9, image: '/images/portfolio/hair3.jpg', serviceSlug: 'hair-services', artistId: 1, createdAt: '2024-06-10', alt: 'کوتاهی باب کلاسیک' },
];

export const galleryImages: GalleryImage[] = portfolioItems.slice(0, 4).map(item => ({
  src: item.image,
  alt: item.alt || 'نمونه کار',
}));

/* -------------------------------------------------------------------------- */
/* BLOG DATA                                       */
/* -------------------------------------------------------------------------- */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "hair-keratin-care",
    title: "مراقبت‌های بعد از کراتین مو؛ بایدها و نبایدها",
    excerpt: "اگر موهایتان را کراتین کرده‌اید، برای ماندگاری بیشتر و حفظ سلامت موهایتان باید این نکات طلایی را بدانید.",
    content: `
      <p>کراتین مو یکی از محبوب‌ترین روش‌ها برای صاف و احیا کردن موهای آسیب‌دیده است. اما کار شما بعد از خروج از سالن تمام نمی‌شود! مراقبت‌های بعد از کراتین به اندازه خود پروسه اهمیت دارد.</p>
      <h3>۱. شستشو را به تعویق بیندازید</h3>
      <p>تا ۳ روز بعد از انجام کراتین، نباید موهایتان را بشویید یا حتی خیس کنید. این زمان به مواد کراتین اجازه می‌دهد تا کاملاً در کوتیکول مو تثبیت شوند.</p>
      <h3>۲. شامپوی مناسب انتخاب کنید</h3>
      <p>استفاده از شامپوهای بدون سولفات (Sulfate-free) حیاتی است. سولفات‌ها دشمن اصلی کراتین هستند و باعث از بین رفتن سریع آن می‌شوند.</p>
    `,
    coverImage: "/images/blog/keratin-care.jpg",
    author: "سارا اکبری",
    date: "1403/02/15",
    category: "مراقبت مو",
    readingTime: "5 دقیقه",
    tags: ["کراتین", "سلامت مو", "شامپو فری سولفات"],
  },
  {
    id: "2",
    slug: "summer-skincare-routine",
    title: "روتین پوستی تابستانی؛ خداحافظی با آفتاب‌سوختگی",
    excerpt: "در فصل گرما پوست نیاز به مراقبت‌های ویژه‌ای دارد. روتین پوستی خود را با تغییر فصل به‌روز کنید.",
    content: "محتوای کامل مقاله...",
    coverImage: "/images/blog/summer-skin.jpg",
    author: "دکتر مهدوی",
    date: "1403/03/01",
    category: "پوست و زیبایی",
    readingTime: "7 دقیقه",
    tags: ["ضد آفتاب", "آبرسانی", "پوست چرب"],
  },
  {
    id: "3",
    slug: "nail-design-trends-2025",
    title: "ترندهای طراحی ناخن ۲۰۲۵ که باید امتحان کنید",
    excerpt: "از فرنچ‌های رنگی تا کروم‌های آینه‌ای؛ جدیدترین مدل‌های ناخن که امسال مد شده‌اند را ببینید.",
    content: "محتوای کامل مقاله...",
    coverImage: "/images/blog/nail-trends.jpg",
    author: "مریم رضایی",
    date: "1403/01/20",
    category: "ناخن",
    readingTime: "4 دقیقه",
    tags: ["طراحی ناخن", "ترند ۲۰۲۵", "کاشت ژل"],
  },
];

/* -------------------------------------------------------------------------- */
/* DATA ACCESSORS                                     */
/* -------------------------------------------------------------------------- */
export const getNavLinks = cache((): NavLink[] => navLinks);
export const getServices = cache((): Service[] => services);
export const getGalleryImages = cache((): GalleryImage[] => galleryImages);
export const getSocialLinks = cache((): SocialLink[] => socialLinks);
export const getArtists = cache((): Artist[] => artists);
export const getPortfolioItems = cache((): PortfolioItem[] => portfolioItems);

export const getServiceBySlug = cache((slug: string): Service | undefined =>
  services.find((s) => s.slug === slug)
);

export const getArtistById = cache((id: number): Artist | undefined =>
  artists.find((a) => a.id === id)
);

export const getArtistBySlug = cache((slug: string): Artist | undefined =>
  artists.find((a) => a.slug === slug)
);

export const getPortfolioItemsByService = cache(
  (slug: string): PortfolioItem[] =>
    portfolioItems.filter((p) => p.serviceSlug === slug)
);

export const getAllEnrichedPortfolioItems = cache((): EnrichedPortfolioItem[] => {
  return portfolioItems.map((item) => ({
    ...item,
    service: services.find(s => s.slug === item.serviceSlug),
    artist: getArtistById(item.artistId),
  }));
});

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

export const enrichedPortfolioItems: EnrichedPortfolioItem[] = 
  portfolioItems.map(item => ({
    ...item,
    artist: getArtistById(item.artistId),
    service: getServiceBySlug(item.serviceSlug),
  }));

/* -------------------------------------------------------------------------- */
/* BLOG HELPERS                                       */
/* -------------------------------------------------------------------------- */
export async function getAllBlogSlugs() {
  return blogPosts.map(post => post.slug);
}

export async function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

/* -------------------------------------------------------------------------- */
/* STATIC PATH GENERATORS                             */
/* -------------------------------------------------------------------------- */
export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getAllArtistSlugs = (): string[] => artists.map(a => a.slug);