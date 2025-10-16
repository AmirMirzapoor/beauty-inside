"use client";

import { useState, useEffect, type FC } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/lib/data";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-brand-green backdrop-blur-lg shadow-md" : "bg-red-300"
      }`}
    >
      <nav className="container mx-auto px-9 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-emerald-500"
        >
          سالن زیبای درون
        </motion.a>
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-white hover:text-accent-pink-light transition-colors duration-300 text-lg font"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:block bg-accent-pink text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg"
        >
          رزرو نوبت
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-green-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>
      {/* for mobile */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white/90 backdrop-blur-lg py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-center py-2 text-accent-pink hover:bg-accent-pink-light/30"
            >
              {link.label}
            </a>
          ))}
          <div className="text-center mt-4">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-accent-pink text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-shadow"
            >
              رزرو نوبت
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
