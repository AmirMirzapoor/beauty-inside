import type {
  NavLink,
  Service,
  GalleryImage,
  Artist,
  PortfolioItem,
  SocialLink,
} from "@/components/common/types";

import { GiHairStrands, GiSpikedDragonHead, GiLotus } from "react-icons/gi";
import { TbBrandDaysCounter } from "react-icons/tb";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

// --- NAVLINK DATA ---
export const navLinks: NavLink[] = [
  { href: "#home", label: "صفحه اصلی" },
  { href: "#services", label: "خدمات ما" },
  { href: "#about", label: "درباره ما" },
  { href: "#gallery", label: "گالری" },
  { href: "#contact", label: "تماس با ما" },
];

// --- SERVICES DATA ---
export const services: Service[] = [
  {
    id: 1,
    slug: "hair-services",
    icon: <GiHairStrands size={30} />,
    title: "خدمات مو",
    description: "انواع کوتاهی، رنگ و لایت، کراتین و احیای مو.",
  },
  {
    id: 2,
    slug: "nail-services",
    icon: <TbBrandDaysCounter size={30} />,
    title: "خدمات ناخن",
    description: "مانیکور، پدیکور، کاشت و طراحی ناخن.",
  },
  {
    id: 3,
    slug: "makeup-services",
    icon: <GiSpikedDragonHead size={30} />,
    title: "میکاپ و گریم",
    description: "میکاپ حرفه‌ای عروس، گریم سینمایی.",
  },
  {
    id: 4,
    slug: "skincare-services",
    icon: <GiLotus size={30} />,
    title: "خدمات پوست",
    description: "فیشیال تخصصی، پاکسازی و آبرسانی.",
  },
];

// --- GALLERY DATA ---
export const galleryImages: GalleryImage[] = [
  { src: "/images/portfolio/im8.jpg", alt: "مدل مو ۱" },
  { src: "/images/portfolio/im3.jpg", alt: "طراحی ناخن" },
  { src: "/images/portfolio/im4.jpg", alt: "میکاپ حرفه‌ای" },
  { src: "/images/portfolio/im5.jpg", alt: "مدل مو ۲" },
];

// --- SOCIAL-LINK DATA ---
export const socialLinks: SocialLink[] = [
  { href: "#", icon: <FaInstagram size={24} />, label: "Instagram" },
  { href: "#", icon: <FaTelegram size={24} />, label: "Telegram" },
  { href: "#", icon: <FaWhatsapp size={24} />, label: "Whatsapp" },
];

// --- ARTISTS DATA ---
export const artists: Artist[] = [
  {
    id: 1,
    name: "سارا اکبری",
    profilePic: "/images/artists/artist1.png",
    specialty: "متخصص رنگ و لایت",
    bio: "با بیش از ۱۰ سال تجربه در زمینه جدیدترین تکنیک‌های رنگ مو، آماده ارائه بهترین خدمات به شما هستم.",
    rating: 4.9,
  },
  {
    id: 2,
    name: "مریم رضایی",
    profilePic: "/images/artists/artist2.png",
    specialty: "ناخن‌کار حرفه‌ای",
    bio: "متخصص در انواع کاشت ناخن و طراحی‌های مدرن و مینیمال.",
    rating: 4.8,
  },
  {
    id: 3,
    name: "الهام قاسمی",
    profilePic: "/images/artists/artist3.jpg",
    specialty: "میکاپ آرتیست",
    bio: "میکاپ تخصصی عروس و گریم سینمایی با استفاده از بهترین برندهای روز دنیا.",
    rating: 5.0,
  },
];

// --- PORTFOLIO ITEMS DATA ---
export const portfolioItems: PortfolioItem[] = [
  // Hair Services
  {
    id: 1,
    image: "/images/portfolio/hair1.jpg",
    serviceSlug: "hair-services",
    artistId: 1,
  },
  {
    id: 2,
    image: "/images/portfolio/hair2.jpg",
    serviceSlug: "hair-services",
    artistId: 1,
  },
  // Nail Services
  {
    id: 3,
    image: "/images/portfolio/nail1.jpg",
    serviceSlug: "nail-services",
    artistId: 2,
  },
  {
    id: 4,
    image: "/images/portfolio/nail2.jpg",
    serviceSlug: "nail-services",
    artistId: 2,
  },
  {
    id: 5,
    image: "/images/portfolio/nail3.jpg",
    serviceSlug: "nail-services",
    artistId: 2,
  },
  // Makeup Services
  {
    id: 6,
    image: "/images/portfolio/makeup1.jpg",
    serviceSlug: "makeup-services",
    artistId: 3,
  },
  {
    id: 7,
    image: "/images/portfolio/makeup2.jpg",
    serviceSlug: "makeup-services",
    artistId: 3,
  },
  {
    id: 8,
    image: "/images/portfolio/makeup3.jpg",
    serviceSlug: "makeup-services",
    artistId: 3,
  },
  // More hair services by another artist
  {
    id: 9,
    image: "/images/portfolio/hair3.jpg",
    serviceSlug: "hair-services",
    artistId: 3,
  },
];

// --- DATA ACCESS HELPERS (Mini API) ---
export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export const getArtistById = (id: number) => artists.find((a) => a.id === id);

export const getPortfolioItemsByService = (slug: string) =>
  portfolioItems.filter((p) => p.serviceSlug === slug);

export const getPortfolioItemsByArtist = (id: number) =>
  portfolioItems.filter((p) => p.artistId === id);
