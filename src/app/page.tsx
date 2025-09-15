"use client";

import { useState, useEffect, type FC, type ReactNode } from "react";
// Import the Next.js Image component
import Image from "next/image";
import { FiMenu, FiX, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { GiHairStrands, GiSpikedDragonHead, GiLotus } from "react-icons/gi";
import { TbBrandDaysCounter } from "react-icons/tb";

// --- TYPE DEFINITIONS for improved type safety ---
type NavLink = {
  href: string;
  label: string;
};

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

// --- DATA COLLECTIONS for a data-driven UI ---
const navLinks: NavLink[] = [
  { href: "#home", label: "صفحه اصلی" },
  { href: "#services", label: "خدمات ما" },
  { href: "#about", label: "درباره ما" },
  { href: "#gallery", label: "گالری" },
  { href: "#contact", label: "تماس با ما" },
];

const services: Service[] = [
  {
    icon: <GiHairStrands size={30} />,
    title: "خدمات مو",
    description: "انواع کوتاهی، رنگ و لایت، کراتین و احیای مو با بهترین مواد.",
  },
  {
    icon: <TbBrandDaysCounter size={30} />,
    title: "خدمات ناخن",
    description: "مانیکور، پدیکور، کاشت و طراحی ناخن با جدیدترین مدل‌ها.",
  },
  {
    icon: <GiSpikedDragonHead size={30} />,
    title: "میکاپ و گریم",
    description: "میکاپ حرفه‌ای عروس و همراه، گریم سینمایی و کانتورینگ.",
  },
  {
    icon: <GiLotus size={30} />,
    title: "خدمات پوست",
    description: "فیشیال تخصصی، پاکسازی عمیق و آبرسانی پوست صورت.",
  },
];

const galleryImages: GalleryImage[] = [
  { src: "/images/portfolio/im8.jpg", alt: "مدل مو ۱" },
  { src: "/images/portfolio/im3.jpg", alt: "طراحی ناخن" },
  { src: "/images/portfolio/im4.jpg", alt: "میکاپ حرفه‌ای" },
  { src: "/images/portfolio/im5.jpg", alt: "مدل مو ۲" },
];

const socialLinks = [
  { href: "#", icon: <FaInstagram size={24} />, label: "Instagram" },
  { href: "#", icon: <FaTelegram size={24} />, label: "Telegram" },
  { href: "#", icon: <FaWhatsapp size={24} />, label: "Whatsapp" },
];

// --- REUSABLE COMPONENTS ---
const SectionTitle: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">{title}</h2>
    <p className="text-gray-600 mt-2">{subtitle}</p>
    <div className="inline-block w-24 h-1 bg-gold mt-4 rounded-full"></div>
  </div>
);

// --- PAGE SECTIONS AS COMPONENTS ---

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-dark-text">
          سالن زیبای درون
        </a>
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:block bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg"
        >
          رزرو نوبت
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-dark-text focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 text-gray-700 hover:bg-gold/10"
            >
              {link.label}
            </a>
          ))}
          <div className="text-center mt-4">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-gold text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-shadow"
            >
              رزرو نوبت
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection: FC = () => (
  <section
    id="home"
    className="h-screen bg-cover bg-center flex items-center"
    style={{
      backgroundImage:
        "url('https://placehold.co/1920x1080/FFF8F0/A0522D?text=Luxury+Salon')",
    }}
  >
    <div className="container mx-auto px-6 text-center md:text-right">
      <div className="bg-black/20 backdrop-blur-sm p-10 rounded-2xl inline-block">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          جایی که زیبایی شکوفا می‌شود
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 max-w-xl mx-auto md:mx-0">
          با خدمات تخصصی ما، زیبایی طبیعی خود را به اوج برسانید. درخششی بی‌نظیر
          در انتظار شماست.
        </p>
        <a
          href="#services"
          className="mt-8 inline-block bg-gold text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
        >
          خدمات ما را ببینید
        </a>
      </div>
    </div>
  </section>
);

const ServicesSection: FC = () => (
  <section id="services" className="py-20 bg-cream-200">
    <div className="container mx-auto px-6">
      <SectionTitle
        title="خدمات تخصصی ما"
        subtitle="با بالاترین کیفیت و جدیدترین متدها در خدمت شما هستیم."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out-expo text-center group"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-gold/20 text-gold p-4 rounded-full group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-dark-text">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection: FC = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <Image
          src="/images/im1.jpg"
          alt="درباره سالن زیبای درون"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-right">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-text">
          داستان ما
        </h2>
        <div className="inline-block w-24 h-1 bg-gold mt-4 mb-6 rounded-full ml-auto md:mr-0"></div>
        <p className="text-gray-600 leading-relaxed mb-4">
          سالن زیبایی درن با بیش از یک دهه تجربه، همواره در تلاش بوده تا با
          استفاده از بهترین متخصصان و به‌روزترین تکنیک‌های دنیا، محیطی لوکس و
          آرام را برای شما عزیزان فراهم آورد. هدف ما، خلق تجربه‌ای منحصر به فرد
          از زیبایی و آرامش برای هر یک از مشتریانمان است.
        </p>
        <p className="text-gray-600 leading-relaxed">
          ما به کیفیت کار خود ایمان داریم و معتقدیم که زیبایی واقعی از درون
          سرچشمه می‌گیرد و وظیفه ما تنها نمایان کردن آن است.
        </p>
      </div>
    </div>
  </section>
);

const GallerySection: FC = () => (
  <section id="gallery" className="py-20 bg-cream-200">
    <div className="container mx-auto px-6">
      <SectionTitle
        title="نمونه کارهای ما"
        subtitle="نگاهی به هنر دستان متخصصان ما بیندازید."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg group"
          >
            {/* Replaced <img> with <Image> component */}
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out-expo"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer id="contact" className="bg-dark-text text-white pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 text-center md:text-right">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gold inline-block pb-2">
            سالن زیبای درون
          </h3>
          <p className="text-gray-300">
            ما معتقدیم هر زنی شایسته درخشیدن است. با ما، بهترین نسخه خود باشید.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 space-x-reverse mt-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gold inline-block pb-2">
            دسترسی سریع
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={`${link.href}-footer`}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gold inline-block pb-2">
            تماس با ما
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-center md:justify-start">
              <FiMapPin className="ml-2 text-gold" />
              <span>تهران، خیابان فرشته، پلاک ۲۴</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FiPhone className="ml-2 text-gold" />
              <a
                href="tel:02112345678"
                className="hover:text-gold transition-colors"
              >
                ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FiMail className="ml-2 text-gold" />
              <a
                href="mailto:info@darunbeauty.com"
                className="hover:text-gold transition-colors"
              >
                info@insidebeauty.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 border-t border-gray-700 mt-12 pt-6">
        <p>&copy; ۲۰۲۵ - تمامی حقوق برای سالن زیبایی درون محفوظ است.</p>
      </div>
    </div>
  </footer>
);

// --- MAIN PAGE COMPONENT ---
export default function Home() {
  return (
    <div className="bg-cream-100">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
