"use client";

import type { FC } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./animations";

const SectionTitle: FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    transition={{ duration: 0.8 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-brand-green">{title}</h2>
    <p className="text-gray-600 mt-2">{subtitle}</p>
    <div className="inline-block w-24 h-1 bg-accent-pink mt-4 rounded-full"></div>
  </motion.div>
);

export default SectionTitle;
