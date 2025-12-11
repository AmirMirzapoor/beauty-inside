import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-green-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* پترن پس‌زمینه محو */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-pink rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* ستون اول: درباره ما */}
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold text-white mb-6 block">
              زیبای درون<span className="text-brand-pink">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              ارائه دهنده تخصصی‌ترین خدمات زیبایی و مراقبتی پوست و مو. ما متعهدیم تا با استفاده از بهترین متریال، زیبایی طبیعی شما را دوچندان کنیم.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-pink hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ستون دوم: دسترسی سریع */}
          <div>
            <h3 className="text-lg font-bold text-brand-gold mb-6">دسترسی سریع</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={`footer-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-pink transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون سوم: خدمات پرطرفدار (هاردکد شده برای سئو بهتر) */}
          <div>
            <h3 className="text-lg font-bold text-brand-gold mb-6">خدمات محبوب</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/hair-color" className="text-gray-400 hover:text-brand-pink transition-colors text-sm">
                  رنگ و لایت تخصصی
                </Link>
              </li>
              <li>
                <Link href="/services/nail-implant" className="text-gray-400 hover:text-brand-pink transition-colors text-sm">
                  کاشت و طراحی ناخن
                </Link>
              </li>
              <li>
                <Link href="/services/facial" className="text-gray-400 hover:text-brand-pink transition-colors text-sm">
                  فیشیال و پاکسازی پوست
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون چهارم: تماس */}
          <div>
            <h3 className="text-lg font-bold text-brand-gold mb-6">اطلاعات تماس</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin className="text-brand-pink text-xl flex-shrink-0 mt-0.5" />
                <span>تهران، خیابان فرشته، پلاک ۲۴، ساختمان رویال، طبقه ۴</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiPhone className="text-brand-pink text-xl flex-shrink-0" />
                <a href="tel:02112345678" className="hover:text-white transition-colors"  dir="ltr">
                  ۰۲۱ - ۱۲۳۴ ۵۶۷۸
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiMail className="text-brand-pink text-xl flex-shrink-0" />
                <a href="mailto:info@beautyinside.ir" className="hover:text-white transition-colors">
                  info@beautyinside.ir
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* کپی رایت */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} تمامی حقوق برای سالن زیبایی «زیبای درون» محفوظ است. 
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline mt-2 sm:mt-0">طراحی و توسعه با ❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}