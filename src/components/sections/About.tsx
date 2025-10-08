"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, zoomIn } from "@/components/animations";
import type { FC } from "react";

const AboutSection: FC = () => (
  <section id="about" className="py-20 bg-green-300">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
        transition={{ duration: 2.5 }}
        className="md:w-1/2"
      >
        <Image
          src="/images/im1.jpg"
          alt="درباره سالن زیبای درون"
          width={600}
          height={400}
          className="rounded-2xl shadow-2xl w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 2.5 }}
        className="md:w-1/2 text-center md:text-right"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-green">
          داستان ما
        </h2>
        <div className="inline-block w-24 h-1 bg-accent-pink mt-4 mb-6 rounded-full ml-auto md:mr-0"></div>
        <p className="text-gray-600 leading-relaxed mb-4">
          سالن زیبایی درون با بیش از یک دهه تجربه، همواره در تلاش بوده تا با
          استفاده از بهترین متخصصان و به‌روزترین تکنیک‌های دنیا، محیطی لوکس و
          آرام را برای شما عزیزان فراهم آورد. هدف ما، خلق تجربه‌ای منحصر به فرد
          از زیبایی و آرامش برای هر یک از مشتریانمان است.
        </p>
        <p className="text-gray-600 leading-relaxed">
          ما به کیفیت کار خود ایمان داریم و معتقدیم که زیبایی واقعی از درون
          سرچشمه می‌گیرد و وظیفه ما تنها نمایان کردن آن است.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;