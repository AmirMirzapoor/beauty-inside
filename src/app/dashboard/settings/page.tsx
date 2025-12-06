"use client";

import { useState } from "react";
import { FaSave, FaLock, FaClock, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/ui/Toast";

export default function SettingsPage() {
  const { toast, showToast, hideToast } = useToast();
  const [activeTab, setActiveTab] = useState("availability");

  const [workingHours, setWorkingHours] = useState([
    { day: "شنبه", start: "09:00", end: "18:00", active: true },
    { day: "یکشنبه", start: "09:00", end: "18:00", active: true },
    { day: "دوشنبه", start: "09:00", end: "18:00", active: true },
    { day: "سه‌شنبه", start: "09:00", end: "18:00", active: true },
    { day: "چهارشنبه", start: "09:00", end: "18:00", active: true },
    { day: "پنج‌شنبه", start: "09:00", end: "14:00", active: true },
    { day: "جمعه", start: "00:00", end: "00:00", active: false },
  ]);

  return (
    <div className="max-w-5xl mx-auto">
      <Toast {...toast} onClose={hideToast} />

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">تنظیمات حساب</h1>
        <p className="text-gray-500 mt-1">مدیریت ساعات کاری، امنیت و اعلان‌ها</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* منو */}
        <div className="md:col-span-1 space-y-2">
          <button onClick={() => setActiveTab("availability")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "availability" ? "bg-brand-pink text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
            <FaClock /> ساعات کاری
          </button>
          <button onClick={() => setActiveTab("security")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === "security" ? "bg-brand-pink text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50"}`}>
            <FaLock /> امنیت
          </button>
        </div>

        {/* محتوا */}
        <div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
          {activeTab === "availability" && (
            <div className="space-y-4 animate-fadeIn">
              <h2 className="text-xl font-bold text-brand-green-dark border-b pb-4">برنامه هفتگی</h2>
              {workingHours.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <button onClick={() => {
                        const newHours = [...workingHours];
                        newHours[index].active = !newHours[index].active;
                        setWorkingHours(newHours);
                      }} className={`text-2xl ${day.active ? "text-brand-green" : "text-gray-300"}`}>
                      {day.active ? <FaToggleOn /> : <FaToggleOff />}
                    </button>
                    <span className="font-medium w-20">{day.day}</span>
                  </div>
                  {day.active ? (
                    <div className="flex gap-2 text-sm"><span className="bg-white px-2 py-1 rounded border">{day.start}</span><span>تا</span><span className="bg-white px-2 py-1 rounded border">{day.end}</span></div>
                  ) : <span className="text-sm text-gray-400">تعطیل</span>}
                </div>
              ))}
            </div>
          )}
          
          {activeTab === "security" && (
             <div className="space-y-4 animate-fadeIn">
               <h2 className="text-xl font-bold text-brand-green-dark border-b pb-4">تغییر رمز عبور</h2>
               <input type="password" placeholder="رمز عبور فعلی" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200" />
               <input type="password" placeholder="رمز عبور جدید" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200" />
             </div>
          )}

          <div className="mt-8 pt-6 border-t flex justify-end">
            <button onClick={() => showToast("تنظیمات ذخیره شد", "success")} className="bg-brand-green text-white px-8 py-3 rounded-xl font-bold flex gap-2 hover:bg-brand-green-dark transition-colors">
              <FaSave /> ذخیره تغییرات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}