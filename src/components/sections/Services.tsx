"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services, getServiceIcon } from "@/lib/data";
import SectionTitle from "@/components/common/Titles";
import { FiArrowLeft } from "react-icons/fi";

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-background-section/20 overflow-hidden">
      {/* پترن پس‌زمینه */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-pink rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-green rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="خدمات تخصصی ما"
          subtitle="تجربه‌ای متفاوت از زیبایی با جدیدترین متدهای روز دنیا"
        />

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {services.map((service, index) => (
            <Link 
              href={`/services/${service.slug}`} 
              key={service.id} 
              className="group block h-full"
              prefetch={true}
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 
                           border border-white/50 shadow-sm hover:shadow-xl hover:shadow-brand-pink/10 
                           transition-all duration-300 group-hover:-translate-y-2 overflow-hidden"
              >
                {/* نوار رنگی بالای کارت */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink to-brand-gold 
                              transition-all duration-500 group-hover:h-1.5" />

                <div className="flex flex-col h-full">
                  {/* آیکون با افکت تغییر رنگ در هاور */}
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 
                                rounded-2xl bg-background-light text-brand-green-dark 
                                shadow-inner transition-all duration-500 
                                group-hover:scale-110 group-hover:bg-brand-green-dark group-hover:shadow-lg">
                    {/* استفاده از کلاس invert و brightness برای سفید کردن آیکون در حالت هاور
                       این کلاس‌ها فقط روی تصاویر اعمال می‌شوند
                    */}
                    <div className="transition-all duration-500 group-hover:brightness-0 group-hover:invert">
                      {getServiceIcon(service.iconKey, 32)}
                    </div>
                  </div>

                  {/* متن‌ها */}
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-pink transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {service.description}
                  </p>

                  {/* دکمه مشاهده بیشتر */}
                  <div className="flex items-center text-sm font-semibold text-brand-gold group-hover:text-brand-pink transition-colors">
                    <span>مشاهده جزئیات</span>
                    <FiArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}