"use client";

import { useState } from "react";
import { FaSave, FaBell, FaLock, FaClock, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/ui/Toast";

export default function SettingsPage() {
  const { toast, showToast, hideToast } = useToast();
  
  // استیت برای تب فعال
  const [activeTab, setActiveTab] = useState("availability");

  // استیت‌های تنظیمات
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    promo: false,
  });

  const [workingHours, setWorkingHours] = useState([
    { day: "شنبه", start: "09:00", end: "18:00", active: true },
    { day: "یکشنبه", start: "09:00", end: "18:00", active: true },
    { day: "دوشنبه", start: "09:00", end: "18:00", active: true },
    { day: "سه‌شنبه", start: "09:00", end: "18:00", active: true },
    { day: "چهارشنبه", start: "09:00", end: "18:00", active: true },
    { day: "پنج‌شنبه", start: "09:00", end: "14:00", active: true },
    { day: "جمعه", start: "00:00", end: "00:00", active: false },
  ]);

  const handleSave = () => {
    // شبیه‌سازی ذخیره
    showToast("تنظیمات با موفقیت ذخیره شد", "success");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Toast {...toast} onClose={hideToast} />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">تنظیمات حساب</h1>
        <p className="text-gray-500 mt-1">مدیریت ساعات کاری، امنیت و اعلان‌ها</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* منوی تنظیمات */}
        <div className="md:col-span-1 space-y-2">
          <button 
            onClick={() => setActiveTab("availability")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "availability" ? "bg-brand-pink text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50"}`}
          >
            <FaClock /> ساعات کاری
          </button>
          <button 
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "notifications" ? "bg-brand-pink text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50"}`}
          >
            <FaBell /> اعلان‌ها
          </button>
          <button 
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "security" ? "bg-brand-pink text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50"}`}
          >
            <FaLock /> امنیت
          </button>
        </div>

        {/* محتوای تنظیمات */}
        <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[500px]">
          
          {/* تب ساعات کاری */}
          {activeTab === "availability" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-brand-green-dark border-b pb-4">برنامه هفتگی شما</h2>
              <div className="space-y-4">
                {workingHours.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => {
                          const newHours = [...workingHours];
                          newHours[index].active = !newHours[index].active;
                          setWorkingHours(newHours);
                        }}
                        className={`text-2xl transition-colors ${day.active ? "text-brand-green" : "text-gray-300"}`}
                      >
                        {day.active ? <FaToggleOn /> : <FaToggleOff />}
                      </button>
                      <span className={`font-medium w-20 ${day.active ? "text-gray-800" : "text-gray-400"}`}>{day.day}</span>
                    </div>
                    
                    {day.active ? (
                      <div className="flex items-center gap-2">
                        <input type="time" defaultValue={day.start} className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-sm outline-none focus:border-brand-pink" />
                        <span className="text-gray-400">-</span>
                        <input type="time" defaultValue={day.end} className="bg-white border border-gray-300 rounded-lg px-2 py-1 text-sm outline-none focus:border-brand-pink" />
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400 italic">تعطیل</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* تب اعلان‌ها */}
          {activeTab === "notifications" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-brand-green-dark border-b pb-4">تنظیمات اعلان‌ها</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">ایمیل یادآوری</h3>
                    <p className="text-sm text-gray-500">دریافت ایمیل برای نوبت‌های جدید</p>
                  </div>
                  <button 
                    onClick={() => setNotifications({...notifications, email: !notifications.email})}
                    className={`text-3xl transition-colors ${notifications.email ? "text-brand-pink" : "text-gray-300"}`}
                  >
                    {notifications.email ? <FaToggleOn /> : <FaToggleOff />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800">پیامک (SMS)</h3>
                    <p className="text-sm text-gray-500">دریافت پیامک فوری هنگام رزرو</p>
                  </div>
                  <button 
                    onClick={() => setNotifications({...notifications, sms: !notifications.sms})}
                    className={`text-3xl transition-colors ${notifications.sms ? "text-brand-pink" : "text-gray-300"}`}
                  >
                    {notifications.sms ? <FaToggleOn /> : <FaToggleOff />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* تب امنیت */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-xl font-bold text-brand-green-dark border-b pb-4">تغییر رمز عبور</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رمز عبور فعلی</label>
                  <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رمز عبور جدید</label>
                  <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">تکرار رمز عبور جدید</label>
                  <input type="password" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-pink" />
                </div>
              </div>
            </div>
          )}

          {/* دکمه ذخیره کلی */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <button 
              onClick={handleSave}
              className="bg-brand-green text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-brand-green-dark transition-colors shadow-lg"
            >
              <FaSave />
              ذخیره تغییرات
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}