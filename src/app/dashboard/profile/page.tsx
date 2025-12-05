"use client";

import { useState } from "react";
import { FaCamera, FaSave, FaUserCircle } from "react-icons/fa";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/ui/Toast";

export default function ProfilePage() {
  const { toast, showToast, hideToast } = useToast();
  
  // دیتای شبیه‌سازی شده کاربر
  const [formData, setFormData] = useState({
    name: "سارا اکبری",
    title: "متخصص رنگ و لایت",
    bio: "با بیش از ۱۰ سال سابقه درخشان در زمینه رنگ مو و مدرس رسمی کمپانی‌های معتبر...",
    email: "sara@beauty.com",
    phone: "09121234567",
    instagram: "@sara_colorist"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // شبیه‌سازی ذخیره
    showToast("اطلاعات پروفایل با موفقیت به‌روزرسانی شد", "success");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Toast {...toast} onClose={hideToast} />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">پروفایل من</h1>
        <p className="text-gray-500 mt-1">اطلاعات شخصی و حرفه‌ای خود را مدیریت کنید</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* کارت عکس پروفایل */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 group cursor-pointer">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-brand-pink/20 relative">
                {/* در پروژه واقعی از Image استفاده می‌شود */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                  <FaUserCircle className="text-6xl" />
                </div>
                {/* لایه هاور برای تغییر عکس */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaCamera className="text-white text-2xl" />
                </div>
              </div>
            </div>
            <h3 className="font-bold text-gray-800 text-lg">{formData.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{formData.title}</p>
            <button className="text-brand-pink text-sm font-bold hover:underline">تغییر تصویر پروفایل</button>
          </div>
        </div>

        {/* فرم ویرایش اطلاعات */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">نام و نام خانوادگی</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink transition-colors" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">عنوان شغلی</label>
                <input 
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink transition-colors" 
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">شماره تماس</label>
                <input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink transition-colors text-left" 
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">اینستاگرام</label>
                <input 
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink transition-colors text-left" 
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">درباره من (بیوگرافی)</label>
              <textarea 
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink transition-colors resize-none"
              ></textarea>
              <p className="text-xs text-gray-400 mt-2 text-left">این متن در صفحه عمومی شما نمایش داده می‌شود.</p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button 
                type="submit" 
                className="bg-brand-pink hover:bg-brand-pink-dark text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-brand-pink/20 transition-all hover:-translate-y-1"
              >
                <FaSave />
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}