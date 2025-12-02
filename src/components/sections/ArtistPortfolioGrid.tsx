"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHandPointer } from 'react-icons/fa';
import { staggerContainer, itemVariants } from '@/components/common/animations';
import type { EnrichedPortfolioItem } from '@/components/common/types';

interface Props {
  items: EnrichedPortfolioItem[];
  className?: string;
}

export default function ArtistPortfolioGrid({ items, className = '' }: Props) {
  if (!items?.length) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <p className="text-lg text-gray-500">
          هنوز نمونه‌کاری ثبت نشده است.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {items.map((item) => {
        // ساخت لینک رزرو با پارامترهای مورد نیاز
        // اگر آیتم دارای آرتیست باشد از اسلاگ آن استفاده می‌کنیم، وگرنه هندل می‌کنیم
        const artistSlug = item.artist?.slug || 'unknown';
        const bookingLink = `/booking?artist=${artistSlug}&style=${item.id}`;

        return (
          <motion.article
            key={item.id}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.alt || `نمونه کار شماره ${item.id}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8fvx4PQAICwMbO9k01AAAAABJRU5ErkJggg=="
              />
              
              {/* Overlay: این لایه فقط در هاور نمایش داده می‌شود */}
              <div className="absolute inset-0 bg-brand-green-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                <h3 className="text-white font-bold text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.alt || 'نمونه کار زیبا'}
                </h3>
                
                <p className="text-gray-200 text-sm mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  آیا این سبک را می‌پسندید؟
                </p>

                <Link
                  href={bookingLink}
                  className="inline-flex items-center gap-2 bg-brand-pink text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-brand-pink transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg"
                >
                  <FaHandPointer />
                  انتخاب برای رزرو
                </Link>
              </div>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}