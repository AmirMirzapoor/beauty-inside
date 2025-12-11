"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronDown, FaHandPointer } from "react-icons/fa";
import SectionTitle from "@/components/common/Titles";
import { getAllEnrichedPortfolioItems } from "@/lib/data";

// دریافت 4 آیتم اول برای نمایش در صفحه اصلی
const galleryItems = getAllEnrichedPortfolioItems().slice(0, 4);

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background-section/70 relative pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="گالری هنر ما"
          subtitle="ظرافت و زیبایی در جزئیات کارهای ما نهفته است"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 h-[500px]">
          {galleryItems.map((item, index) => {
            const bookingLink = `/booking?artist=${item.artist?.slug}&style=${item.id}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative group rounded-3xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all duration-500 h-full
                  ${index === 0 ? 'col-span-2 row-span-2' : 'col-span-1'}
                `}
              >
                <div className="relative w-full h-full group">
                  <Image
                    src={item.image}
                    alt={item.alt || "نمونه کار"}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                  />
                  
                  {/* لایه هاور - دکمه رزرو */}
                  <div className="absolute inset-0 bg-brand-green-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm z-10">
                    <h3 className="text-white font-bold text-lg mb-2 translate-y-4 group-hover:translate-y-2 transition-transform duration-300 delay-75">
                      {item.alt}
                    </h3>
                    
                    <Link
                      href={bookingLink}
                      className="inline-flex items-center gap-2 bg-brand-pink text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-brand-pink transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg mt-2"
                    >
                      <FaHandPointer />
                      رزرو این مدل
                    </Link>
                  </div>

                  {/* اطلاعات آرتیست (پایین تصویر) */}
                  {item.artist && (
                    <Link 
                      href={`/artists/${item.artist.slug}`}
                      className="absolute bottom-0 right-3 left-3 bg-white/95 p-2 rounded-xl flex items-center gap-2 translate-y-[105%] group-hover:translate-y-[-13%] transition-transform duration-300 delay-150 shadow-lg z-20 cursor-pointer hover:bg-brand-pink hover:text-white group/artist"
                    >
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-pink group-hover/artist:border-white transition-colors flex-shrink-0">
                        <Image src={item.artist.profilePic} alt={item.artist.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold group-hover/artist:text-white text-gray-800 transition-colors truncate">{item.artist.name}</p>
                        <p className="text-[9px] text-gray-500 group-hover/artist:text-white/80 transition-colors truncate">{item.artist.specialty}</p>
                      </div>
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* دکمه مشاهده بیشتر با انیمیشن */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <Link href="/gallery" className="group flex flex-col items-center">
            <span className="text-sm font-bold text-gray-500 group-hover:text-brand-pink transition-colors mb-2">مشاهده تمام تصاویر</span>
            <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-all duration-300 animate-bounce">
              <FaChevronDown />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}