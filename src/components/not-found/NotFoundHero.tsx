"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { itemVariants } from '@/components/common/animations';

export default function NotFoundHero() {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      {/* تصویر SVG سفارشی */}
      <div className="mb-8">
        <svg
          viewBox="0 0 200 200"
          className="w-48 h-48 mx-auto text-brand-pink"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="80" fill="currentColor" opacity="0.1" />
          <path
            d="M100 60v40m0 20h.01"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* عنوان اصلی */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-brand-green-dark mb-4">
        ۴۰۴
      </h1>

      {/* پیام AEO/GEO */}
      <p className="text-lg text-text-secondary leading-relaxed mb-6">
        به نظر می‌رسد صفحه‌ای که دنبال آن بودید جابه‌جا شده یا حذف شده است.
        <br />
        نگران نباشید، ما شما را به مسیر درست برمی‌گردانیم.
      </p>

      {/* دکمه CTA قوی */}
      <Link
        href="/"
        className="inline-flex items-center justify-center 
                   bg-brand-pink hover:bg-brand-pink-dark 
                   text-white font-semibold 
                   px-6 py-3 rounded-full 
                   transition-all duration-300 
                   hover:scale-105 shadow-lg hover:shadow-xl"
      >
        بازگشت به صفحه اصلی
      </Link>

      {/* متن پنهان برای screen readers */}
      <span className="sr-only">
        برای بازگشت به خانه، روی دکمه بالا کلیک کنید.
      </span>
    </motion.div>
  );
}