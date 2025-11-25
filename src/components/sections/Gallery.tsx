"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/Titles";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-green-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="گالری هنر ما"
          subtitle="ظرافت و زیبایی در جزئیات کارهای ما نهفته است"
        />

        {/* گرید بندی ماسونری (Masonry-like) با CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              // تغییر سایز برخی کارت‌ها برای ایجاد تنوع بصری
              className={`relative group rounded-2xl overflow-hidden cursor-zoom-in
                ${index === 0 || index === 7 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}
                ${index === 3 ? 'md:col-span-2' : ''}
              `}
            >
              <Image
                src={image.src}
                alt={image.alt || "نمونه کار سالن زیبایی"}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8fvx4PQAICwMbO9k01AAAAABJRU5ErkJggg=="
              />
              
              {/* افکت تاریک شدن و متن در هاور */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}