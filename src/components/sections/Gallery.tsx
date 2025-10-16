"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, itemVariants } from "@/components/common/animations";
import SectionTitle from "@/components/common/Titles";
import { galleryImages } from "@/lib/data";
import type { FC } from "react";

const GallerySection: FC = () => (
  <section id="gallery" className="py-20 bg-green-300">
    <div className="container mx-auto px-6">
      <SectionTitle
        title="نمونه کارهای ما"
        subtitle="نگاهی به هنر دستان متخصصان ما بیندازید."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="overflow-hidden rounded-2xl shadow-lg group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={600}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out-expo"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default GallerySection;
