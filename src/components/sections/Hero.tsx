"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/common/animations";
import type { FC } from "react";

const HeroSection: FC = () => (
  <section
    id="home"
    className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-brand-green-dark/20 z-0" />
    
    <div className="relative w-full h-full mx-auto flex items-center justify-center md:justify-start">
      <Image
        src="/images/hero.jpeg"
        alt="سالن زیبایی و مراقبت‌های پوست و مو"
        fill
        priority
        className="object-cover object-center z-[-1]"
        style={{ filter: "brightness(0.75)" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center md:text-right"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-pink/20 text-brand-pink-light text-sm font-semibold mb-4 border border-brand-pink/30">
            ✨ تجربه‌ای متفاوت از زیبایی
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            جایی که زیبایی <br />
            <span className="text-brand-pink-light">شکوفا می‌شود</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
            با بهره‌گیری از برترین متخصصان و متریال درجه یک، زیبایی طبیعی خود را به اوج برسانید.
            {/* استفاده از گیومه فارسی برای جلوگیری از خطای بیلد */}
            ما در «زیبای درون» منتظر درخشش شما هستیم.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#services"
              className="px-8 py-4 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-brand-pink/40 hover:-translate-y-1"
            >
              خدمات ما
            </a>
            <a
              href="/booking"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-brand-green-dark rounded-full text-lg font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              رزرو وقت مشاوره
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;