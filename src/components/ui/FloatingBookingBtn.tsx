"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function FloatingBookingBtn() {
  const [isVisible, setIsVisible] = useState(false);

  // نمایش دکمه فقط وقتی کمی اسکرول شد
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 md:hidden" // فقط در موبایل/تبلت نشان داده شود
        >
          {/* دکمه تماس سریع */}
          <a
            href="tel:+982112345678"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-green-dark shadow-lg ring-1 ring-brand-green/20"
            aria-label="تماس با سالن"
          >
            <FiPhone className="h-5 w-5" />
          </a>

          {/* دکمه رزرو اصلی */}
          <Link
            href="/booking"
            className="group flex items-center gap-2 rounded-full bg-brand-pink px-5 py-3 text-white shadow-xl shadow-brand-pink/30 transition-transform active:scale-95"
          >
            <FiCalendar className="h-5 w-5 animate-pulse" />
            <span className="font-bold">رزرو نوبت</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}