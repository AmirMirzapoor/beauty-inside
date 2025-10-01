"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/components/animations";
import type { FC } from "react";

const HeroSection: FC = () => (
  <section id="home" className="relative h-screen flex items-center">
    <Image
      src="/images/hero.jpeg"
      alt="پس زمینه سالن زیبایی"
      fill
      priority
      className="object-cover"
    />
    <div className="container mx-auto px-6 text-center md:text-right">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1 }}
        className="bg-black/20 backdrop-blur-sm p-10 rounded-2xl inline-block"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          جایی که زیبایی شکوفا می‌شود
        </h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-white mt-4 max-w-xl mx-auto md:mx-0"
        >
          با خدمات تخصصی ما، زیبایی طبیعی خود را به اوج برسانید. درخششی بی‌نظیر
          در انتظار شماست.
        </motion.p>
        <a
          href="#services"
          className="mt-8 inline-block bg-accent-pink text-white px-10 py-3 rounded-full text-lg font-semibold
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