"use client";

import Image from 'next/image';
import MotionWrapper from '@/components/common/MotionWrapper';
import { staggerContainer } from '@/components/common/animations';
import type { EnrichedPortfolioItem } from '@/components/common/types';

interface Props {
  items: EnrichedPortfolioItem[];
  className?: string;
}

export default function ArtistPortfolioGrid({ items, className = '' }: Props) {
  if (!items?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">
          نمونه‌کاری برای این هنرمند ثبت نشده است.
        </p>
      </div>
    );
  }

  return (
    <MotionWrapper
      tag="div"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={`grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {items.map((item) => (
        <article
          key={item.id}
          className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.alt || `نمونه کار توسط هنرمند`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              placeholder="blur"
              blurDataURL="/images/placeholder-blur.png"
              loading="lazy"
            />
          </div>
        </article>
      ))}
    </MotionWrapper>
  );
}