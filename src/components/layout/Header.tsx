"use client";

import { useState, useEffect, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { navLinks } from "@/lib/data";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 relative flex items-center justify-between">

        {/* لوگو - سمت راست (فارس) / سمت چپ (ltr) */}
        <div className="z-50">
          <Link href="/" className="relative group">
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-brand-green-dark" : "text-white"
              }`}
            >
              زیبای درون<span className="text-brand-pink">.</span>
            </span>
          </Link>
        </div>

        {/* منو - دقیقاً وسط صفحه */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                isScrolled
                  ? "text-gray-700 hover:text-brand-pink"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* دکمه منوی موبایل - سمت مخالف لوگو */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none transition-colors duration-300 ${
              isMenuOpen || isScrolled ? "text-brand-green-dark" : "text-white"
            }`}
            aria-label="منوی موبایل"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        </nav>

      {/* منوی موبایل */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-brand-green-dark hover:text-brand-pink transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* دکمه رزرو در موبایل همچنان باقی می‌ماند */}
            <Link
              href="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-3 bg-brand-pink text-white rounded-full text-lg font-bold shadow-lg shadow-brand-pink/30"
            >
              رزرو نوبت آنلاین
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
