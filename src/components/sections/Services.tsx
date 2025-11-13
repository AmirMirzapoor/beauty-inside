"use client";

import { motion } from "framer-motion";
import { staggerContainer, itemVariants } from "@/components/common/animations";
import SectionTitle from "@/components/common/Titles";
import { services, getServiceIcon } from "@/lib/data";
import type { FC } from "react";
import Link from "next/link";

const ServicesSection: FC = () => (
  <section id="services" className="py-20 bg-green-300">
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
          <Link href={`/services/${service.slug}`} key={service.id} prefetch>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-red-300 p-8 rounded-2xl shadow-xl 
                          text-center group duration-300 ease-out-expo"
            >
              <div className="flex justify-center mb-4">
                <div 
                  className="bg-white text-brand-green p-4 rounded-full 
                              transition-colors duration-300 
                              group-hover:bg-green-300 group-hover:text-white"
                >
                  {getServiceIcon(service.iconKey, 28)}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-brand-green-dark">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;