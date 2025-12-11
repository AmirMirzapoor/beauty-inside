"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandPointer, FaFilter } from "react-icons/fa";
import SectionTitle from "@/components/common/Titles";
import { getAllEnrichedPortfolioItems, services } from "@/lib/data";

// دریافت دیتا (در کامپوننت کلاینت می‌توانیم مستقیم فراخوانی کنیم چون دیتا استاتیک است)
const allItems = getAllEnrichedPortfolioItems();

const categories = [
  { id: "all", label: "همه تصاویر" },
  ...services.map(s => ({ id: s.slug, label: s.title }))
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");

  const filteredItems = filter === "all" 
    ? allItems 
    : allItems.filter(item => item.serviceSlug === filter);

  return (
    <main className="min-h-screen bg-background-light pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="آلبوم تخصصی خدمات" 
          subtitle="مجموعه‌ای از بهترین نمونه‌کارهای اجرا شده توسط متخصصین ما" 
        />

        {/* فیلترها */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                ${filter === cat.id 
                  ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30 scale-105" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                }
              `}
            >
              {filter === cat.id && <FaFilter className="text-xs" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* گرید تصاویر */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const bookingLink = `/booking?artist=${item.artist?.slug}&style=${item.id}`;
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="break-inside-avoid relative group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.alt || "نمونه کار"}
                      width={500}
                      height={700}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* لایه هاور - دکمه رزرو */}
                    <div className="absolute inset-0 bg-brand-green-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm z-10">
                      <h3 className="text-white font-bold text-lg mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {item.alt}
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

                    {/* اطلاعات آرتیست (پایین تصویر) */}
                    {item.artist && (
                      <Link 
                      href={`/artists/${item.artist.slug}`}
                      className="absolute bottom-0 right-4 left-4 bg-white/95 p-3 rounded-2xl flex items-center gap-3 translate-y-[105%] group-hover:translate-y-[-13%] transition-transform duration-300 delay-150 shadow-lg z-20 cursor-pointer hover:bg-brand-pink hover:text-white group/artist"
                    >                    
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-pink group-hover/artist:border-white transition-colors">
                        <Image src={item.artist.profilePic} alt={item.artist.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold group-hover/artist:text-white text-gray-800 transition-colors">اثر: {item.artist.name}</p>
                        <p className="text-[10px] text-gray-500 group-hover/artist:text-white/80 transition-colors">{item.artist.specialty}</p>
                      </div>
                    </Link>                    
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}