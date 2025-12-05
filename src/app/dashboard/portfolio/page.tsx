"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlus, FaTrash, FaEye, FaUpload, FaTimes } from "react-icons/fa";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/ui/Toast";
import { AnimatePresence, motion } from "framer-motion";

const initialItems = [
  { id: 1, title: "رنگ موی دودی", category: "مو", image: "/images/portfolio/hair1.jpg", views: 120 },
  { id: 2, title: "کاشت ناخن هلویی", category: "ناخن", image: "/images/portfolio/nail1.jpg", views: 85 },
  { id: 3, title: "میکاپ لایت", category: "میکاپ", image: "/images/portfolio/makeup1.jpg", views: 200 },
];

export default function PortfolioManagement() {
  const [items, setItems] = useState(initialItems);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // برای مودال مشاهده
  const { toast, showToast, hideToast } = useToast();

  const handleDelete = (id: number) => {
    if (confirm("آیا از حذف این نمونه‌کار اطمینان دارید؟")) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      showToast("نمونه‌کار با موفقیت حذف شد", "success");
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAdding(false);
    showToast("نمونه‌کار جدید با موفقیت اضافه شد", "success");
  };

  return (
    <div>
      <Toast {...toast} onClose={hideToast} />

      {/* مودال مشاهده تصویر بزرگ */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)} // بستن با کلیک روی پس‌زمینه
          >
            <button 
              className="absolute top-6 right-6 text-white text-3xl hover:text-brand-pink transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl h-[80vh]"
              onClick={(e) => e.stopPropagation()} // جلوگیری از بستن هنگام کلیک روی عکس
            >
              <Image 
                src={selectedImage} 
                alt="Full View" 
                fill 
                className="object-contain" 
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">مدیریت نمونه‌کارها</h1>
          <p className="text-gray-500 mt-1">آلبوم کارهای خود را به‌روز نگه دارید</p>
        </div>
        <button 
          onClick={() => setIsAdding(true)}
          className="bg-brand-pink hover:bg-brand-pink-dark text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-brand-pink/30"
        >
          <FaPlus />
          افزودن کار جدید
        </button>
      </div>

      {/* فرم افزودن */}
      {isAdding && (
        <div className="mb-8 bg-white p-6 rounded-2xl shadow-md border border-gray-100 animate-fadeIn">
          <h3 className="font-bold text-lg mb-4 text-brand-green-dark">افزودن نمونه‌کار جدید</h3>
          <form onSubmit={handleAdd} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">عنوان</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink" placeholder="مثلاً: آمبره موی بلند" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">دسته‌بندی</label>
              <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink">
                <option>خدمات مو</option>
                <option>ناخن</option>
                <option>پوست</option>
                <option>میکاپ</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">تصویر</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <FaUpload className="text-3xl text-gray-400 mx-auto mb-2" />
                <span className="text-gray-500 text-sm">برای آپلود کلیک کنید یا عکس را اینجا رها کنید</span>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-end gap-3">
              <button type="button" onClick={() => setIsAdding(false)} className="px-6 py-2 rounded-xl text-gray-500 hover:bg-gray-100">انصراف</button>
              <button type="submit" className="bg-brand-green text-white px-8 py-2 rounded-xl font-bold hover:bg-brand-green-dark">ذخیره</button>
            </div>
          </form>
        </div>
      )}

      {/* گرید نمونه‌کارها */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="relative h-48 bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} 
                />
                {/* دکمه مشاهده با عملکرد واقعی */}
                <button 
                  onClick={() => setSelectedImage(item.image)}
                  className="hidden group-hover:flex items-center gap-2 z-10 text-white font-bold bg-black/60 hover:bg-brand-pink/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105"
                >
                  <FaEye /> مشاهده
                </button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{item.category}</span>
              </div>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <FaEye /> {item.views} بازدید
                </div>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="text-red-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  title="حذف"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}