"use client";

import { motion } from "framer-motion";
import { staggerContainer, itemVariants } from "@/components/animations";
import { GiHairStrands, GiSpikedDragonHead, GiLotus } from "react-icons/gi";
import { TbBrandDaysCounter } from "react-icons/tb";
import SectionTitle from "./Titles";
import type { FC, ReactNode } from "react";

type Service = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  { id: 1, icon: <GiHairStrands size={30} />, title: "خدمات مو", description: "انواع کوتاهی، رنگ و لایت، کراتین و احیای مو با بهترین مواد." },
  { id: 2, icon: <TbBrandDaysCounter size={30} />, title: "خدمات ناخن", description: "مانیکور، پدیکور، کاشت و طراحی ناخن با جدیدترین مدل‌ها." },
  { id: 3, icon: <GiSpikedDragonHead size={30} />, title: "میکاپ و گریم", description: "میکاپ حرفه‌ای عروس و همراه، گریم سینمایی و کانتورینگ." },
  { id: 4, icon: <GiLotus size={30} />, title: "خدمات پوست", description: "فیشیال تخصصی، پاکسازی عمیق و آبرسانی پوست صورت." },
];

const ServicesSection: FC = () => (
  <section id="services" className="py-20 bg-background-section">
    <div className="container mx-auto px-6">
      <SectionTitle
        title="خدمات تخصصی ما"
        subtitle="با بالاترین کیفیت و جدیدترین متدها در خدمت شما هستیم."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            /*
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}

            استفاده از duration-300 ease-out-expo که معادل CSS کد بالا که از ویژگی Framer Motion است.
            */
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg 
                        text-center group duration-300 ease-out-expo">
            <div 
              className="flex justify-center mb-4"
            >
              <div 
                className="bg-accent-pink/20 text-accent-pink p-4 rounded-full 
                            transition-colors duration-300 
                            group-hover:bg-accent-pink group-hover:text-white">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-green">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;