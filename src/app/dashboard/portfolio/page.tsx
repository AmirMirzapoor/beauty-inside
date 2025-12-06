"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaTrash, FaEye, FaTimes } from "react-icons/fa";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/ui/Toast";
import { AnimatePresence, motion } from "framer-motion";

const initialItems = [
  { id: 1, title: "رنگ موی دودی", category: "مو", image: "/images/portfolio/hair1.jpg", views: 120 },
  { id: 2, title: "کاشت ناخن هلویی", category: "ناخن", image: "/images/portfolio/nail1.jpg", views: 85 },
];

export default function PortfolioManagement() {
  const [items, setItems] = useState(initialItems);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast, hideToast } = useToast();

  return (
    <div>
      <Toast {...toast} onClose={hideToast} />

      {/* مودال مشاهده تصویر */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white text-3xl hover:text-brand-pink z-50"><FaTimes /></button>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="relative w-full max-w-4xl h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Full View" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">مدیریت نمونه‌کارها</h1>
        <button className="bg-brand-pink text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg"><FaPlus /> افزودن</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                {/* دکمه مشاهده اصلاح شده */}
                <button 
                  onClick={() => setSelectedImage(item.image)}
                  className="hidden group-hover:flex items-center gap-2 z-10 text-white font-bold bg-black/60 hover:bg-brand-pink/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105"
                >
                  <FaEye /> مشاهده
                </button>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-800">{item.title}</h3>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <span className="text-gray-400 text-sm flex gap-1"><FaEye /> {item.views}</span>
                <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="text-red-400 hover:text-red-600"><FaTrash /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}