"use client";

import { useState, useEffect, type FC, type ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { GiHairStrands, GiSpikedDragonHead, GiLotus } from "react-icons/gi";
import { TbBrandDaysCounter } from "react-icons/tb";
import { fadeInUp, fadeIn, zoomIn, staggerContainer, itemVariants } from "../components/animations";

// --- TYPE DEFINITIONS ---
type NavLink = {
  href: string;
  label: string;
};

type Service = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

type GalleryImage = {
  src: string;
  alt: string;
};

// --- DATA ---
const navLinks: NavLink[] = [
  { href: "#home", label: "صفحه اصلی" },
  { href: "#services", label: "خدمات ما" },
  { href: "#about", label: "درباره ما" },
  { href: "#gallery", label: "گالری" },
  { href: "#contact", label: "تماس با ما" },
];

const services: Service[] = [
  {
    id: 1,
    icon: <GiHairStrands size={30} />,
    title: "خدمات مو",
    description: "انواع کوتاهی، رنگ و لایت، کراتین و احیای مو با بهترین مواد.",
  },
  {
    id: 2,
    icon: <TbBrandDaysCounter size={30} />,
    title: "خدمات ناخن",
    description: "مانیکور، پدیکور، کاشت و طراحی ناخن با جدیدترین مدل‌ها.",
  },
  {
    id: 3,
    icon: <GiSpikedDragonHead size={30} />,
    title: "میکاپ و گریم",
    description: "میکاپ حرفه‌ای عروس و همراه، گریم سینمایی و کانتورینگ.",
  },
  {
    id: 4,
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

// --- COMPONENTS ---
const SectionTitle: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-dark-text">{title}</h2>
    <p className="text-gray-600 mt-2">{subtitle}</p>
    <div className="inline-block w-24 h-1 bg-gold mt-4 rounded-full"></div>
  </motion.div>
);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-dark-text"
        >
          سالن زیبای درون
        </motion.a>
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-gray-700 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </motion.a>
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
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white/90 backdrop-blur-lg py-4"
        >
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
        </motion.div>
      )}
    </header>
  );
};

const HeroSection: FC = () => (
  <section id="home" className="relative h-screen flex items-center">
    <Image
      src="/images/hero.jpeg"
      alt="پس زمینه سالن زیبایی"
      fill
      priority
      className="object-cover"
    />
    <div className="container mx-auto px-6 text-center md:text-right">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
        className="bg-black/20 backdrop-blur-sm p-10 rounded-2xl inline-block"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          جایی که زیبایی شکوفا می‌شود
        </h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-white mt-4 max-w-xl mx-auto md:mx-0"
        >
          با خدمات تخصصی ما، زیبایی طبیعی خود را به اوج برسانید. درخششی بی‌نظیر
          در انتظار شماست.
        </motion.p>
        <a
          href="#services"
          className="mt-8 inline-block bg-gold text-white px-10 py-3 rounded-full text-lg font-semibold
          transition-all duration-300 shadow-xl 
          hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-1"
        >
          خدمات ما را ببینید
        </a>

      </motion.div>
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
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            /*
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}

            استفاده از duration-300 ease-out-expo که معادل CSS کد بالا که از ویژگی Framer Motion است.
            */
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg 
                        text-center group duration-300 ease-out-expo">
            <div 
              className="flex justify-center mb-4"
            >
              <div 
                className="bg-gold/20 text-gold p-4 rounded-full 
                            transition-colors duration-300 
                            group-hover:bg-gold group-hover:text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-dark-text">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const AboutSection: FC = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
        transition={{ duration: 2.5 }}
        className="md:w-1/2"
      >
        <Image
          src="/images/im1.jpg"
          alt="درباره سالن زیبای درون"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 2.5 }}
        className="md:w-1/2 text-center md:text-right"
      >
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
      </motion.div>
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
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="overflow-hidden rounded-2xl shadow-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out-expo"
              />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Footer: FC = () => (
  <footer id="contact" className="bg-dark-text text-white pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 text-center md:text-right"
      >
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

// --- MAIN PAGE ---
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
