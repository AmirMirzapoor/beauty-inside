"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations";
import type { FC } from "react";

const HeroSection: FC = () => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-green-300 mt-9">
    <div className="relative w-[90%] h-[85%] mx-auto rounded-xl overflow-hidden flex items-center justify-center md:justify-start px-4 sm:px-6">
      <Image
        src="/images/hero.jpeg"
        alt="پس زمینه سالن زیبایی"
        fill
        priority
        className="object-cover"
      />
      <motion.div className="bg-black/20 backdrop-blur-sm p-6 sm:p-10 rounded-2xl text-center md:text-right"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          جایی که زیبایی شکوفا می‌شود
        </h1>
        <p className="text-lg md:text-xl text-white mt-4 max-w-lg">
          با خدمات تخصصی ما، زیبایی طبیعی خود را به اوج برسانید. درخششی بی‌نظیر
          در انتظار شماست.
        </p>
        <a
          href="#services"
          className="mt-8 inline-block bg-accent-pink text-white px-6 py-3 rounded-full text-lg font-semibold
          transition-all duration-300 shadow-xl 
          hover:bg-opacity-90 hover:shadow-2xl hover:-translate-y-1"
        >
          خدمات ما را ببینید
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;