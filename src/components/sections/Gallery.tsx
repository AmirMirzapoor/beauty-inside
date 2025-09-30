"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, itemVariants } from "@/components/animations";
import SectionTitle from "./Titles";
import type { FC } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/images/portfolio/im8.jpg", alt: "مدل مو ۱" },
  { src: "/images/portfolio/im3.jpg", alt: "طراحی ناخن" },
  { src: "/images/portfolio/im4.jpg", alt: "میکاپ حرفه‌ای" },
  { src: "/images/portfolio/im5.jpg", alt: "مدل مو ۲" },
];

const GallerySection: FC = () => (
  <section id="gallery" className="py-20 bg-cream-200">
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
        className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="overflow-hidden rounded-2xl shadow-lg group">
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