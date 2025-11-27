"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, zoomIn } from "@/components/common/animations";
import type { FC } from "react";

const AboutSection: FC = () => (
  <section id="about" className="py-24 bg-background-light relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <Image
            src="/images/im1.jpg"
            alt="محیط آرام و لوکس سالن زیبایی درون"
            width={600}
            height={400}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-brand-pink/30 rounded-3xl -z-10 hidden md:block" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-right"
      >
        <span className="text-brand-pink font-bold tracking-wider text-sm">داستان ما</span>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-green-dark mt-2 mb-6">
          بیش از یک دهه <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-pink to-brand-gold">
            خلق زیبایی و آرامش
          </span>
        </h2>
        
        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
          {/* استفاده از گیومه فارسی برای رفع خطای بیلد */}
          سالن زیبایی «زیبای درون» تنها یک آرایشگاه نیست؛ بلکه پناهگاهی است برای بازیافتن آرامش و درخشش درونی شما. 
          ما با تلفیق هنر دست متخصصان و تکنولوژی روز دنیا، فضایی را خلق کرده‌ایم که در آن هر جزئیات برای رضایت شما طراحی شده است.
        </p>
        
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <span className="block text-3xl font-bold text-brand-pink mb-1">۱۰+</span>
            <span className="text-sm text-gray-500">سال تجربه درخشان</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <span className="block text-3xl font-bold text-brand-green">۵۰۰۰+</span>
            <span className="text-sm text-gray-500">مشتری راضی</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;