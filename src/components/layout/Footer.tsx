import type { FC } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";

type NavLink = {
  href: string;
  label: string;
};

// --- DATA ---
const navLinks: NavLink[] = [
  { href: "#home", label: "صفحه اصلی" },
  { href: "#services", label: "خدمات ما" },
  { href: "#about", label: "درباره ما" },
  { href: "#gallery", label: "گالری" },
  { href: "#contact", label: "تماس با ما" },
];

const socialLinks = [
  { href: "#", icon: <FaInstagram size={24} />, label: "Instagram" },
  { href: "#", icon: <FaTelegram size={24} />, label: "Telegram" },
  { href: "#", icon: <FaWhatsapp size={24} />, label: "Whatsapp" },
];

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

export default Footer;