"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaUser, FaCalendarDay, FaClock, FaHome, FaPrint } from "react-icons/fa";
import { artists, services, getServiceIcon } from "@/lib/data";

// تولید 7 روز آینده به صورت شمسی
const generateNextDays = () => {
  const days = [];
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      id: i,
      dateObj: date,
      label: new Intl.DateTimeFormat('fa-IR', options).format(date),
      dayName: new Intl.DateTimeFormat('fa-IR', { weekday: 'long' }).format(date),
      dayNumber: new Intl.DateTimeFormat('fa-IR', { day: 'numeric' }).format(date),
      fullDate: new Intl.DateTimeFormat('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' }).format(date),
    });
  }
  return days;
};

const AVAILABLE_TIMES = [
  "۱۰:۰۰", "۱۱:۳۰", "۱۳:۰۰", "۱۴:۳۰", "۱۶:۰۰", "۱۷:۳۰", "۱۹:۰۰"
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const artistSlug = searchParams.get("artist");
  const styleId = searchParams.get("style");

  // استیت‌ها
  const [selectedServiceSlug, setSelectedServiceSlug] = useState("");
  const [artistName, setArtistName] = useState("");
  const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // وضعیت ثبت فرم
  const [trackingCode, setTrackingCode] = useState("");

  const nextDays = generateNextDays();

  // پیدا کردن نام فارسی آرتیست
  useEffect(() => {
    if (artistSlug) {
      const foundArtist = artists.find(a => a.slug === artistSlug);
      setArtistName(foundArtist ? foundArtist.name : artistSlug);
    }
  }, [artistSlug]);

  const isServicePreDetermined = !!styleId;

  // هندل کردن ثبت فرم
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // در اینجا درخواست به سرور ارسال می‌شود
    // شبیه‌سازی موفقیت:
    const randomCode = "B-" + Math.floor(1000 + Math.random() * 9000);
    setTrackingCode(randomCode);
    setIsSubmitted(true);
    
    // اسکرول به بالای فرم برای دیدن پیام
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ---------------------------------------------------------------------------
  // حالت نمایش پیام موفقیت (Success View)
  // ---------------------------------------------------------------------------
  if (isSubmitted) {
    const selectedDate = selectedDateId !== null ? nextDays.find(d => d.id === selectedDateId) : null;

    return (
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden text-center animate-fadeIn">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
        
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheckCircle className="text-4xl text-green-500" />
        </div>

        <h2 className="text-2xl font-bold text-brand-green-dark mb-2">نوبت شما با موفقیت رزرو شد!</h2>
        <p className="text-gray-500 mb-8">منتظر دیدار شما در سالن زیبای درون هستیم.</p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
            <span className="text-gray-500 text-sm">کد پیگیری:</span>
            <span className="font-mono text-xl font-bold text-brand-pink tracking-wider">{trackingCode}</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">متخصص:</span>
              <span className="font-bold text-gray-800">{artistName || "تعیین شده توسط سالن"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">تاریخ:</span>
              <span className="font-bold text-gray-800">{selectedDate?.fullDate}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">ساعت:</span>
              <span className="font-bold text-gray-800">{selectedTime}</span>
            </div>
            {styleId && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">مدل انتخابی:</span>
                <span className="font-bold text-gray-800">شماره {styleId}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/" className="flex-1 py-3 rounded-xl bg-brand-green-dark text-white font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
            <FaHome />
            بازگشت به صفحه اصلی
          </Link>
          <button onClick={() => window.print()} className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold flex items-center justify-center gap-2 hover:border-gray-400 transition-all">
            <FaPrint />
            دانلود رسید
          </button>
        </div>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // حالت فرم (Form View)
  // ---------------------------------------------------------------------------
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-brand-gold-light relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink to-brand-gold"></div>

      {/* هدر هوشمند */}
      {artistSlug && (
        <div className="mb-8 bg-brand-gold-light/10 border border-brand-gold-light rounded-2xl p-4 flex items-start gap-4">
          <div className="bg-brand-gold-light p-2.5 rounded-full shadow-sm text-brand-green-dark mt-1">
            <FaUser className="text-xl" />
          </div>
          <div>
            <h3 className="font-bold text-brand-green-dark text-lg">رزرو نوبت اختصاصی</h3>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              شما در حال رزرو نوبت با <span className="font-bold text-brand-pink text-base mx-1">{artistName}</span> هستید.
            </p>
            {isServicePreDetermined && (
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/45 rounded-lg border border-gray-200 text-xs text-gray-500">
                <FaCheckCircle className="text-brand-pink" />
                <span>مدل انتخابی شماره {styleId} ثبت شد</span>
              </div>
            )}
          </div>
        </div>
      )}

      <h3 className="text-2xl font-bold text-brand-green-dark mb-6">تکمیل اطلاعات رزرو</h3>
      
      <form className="space-y-8" onSubmit={handleSubmit}>
        
        {/* ۱. اطلاعات فردی */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-pink transition-colors">نام و نام خانوادگی</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-pink/50 outline-none transition-all placeholder-gray-400 font-medium"
              placeholder="مثلاً: سارا محمدی"
            />
          </div>
          <div className="group">
            <label className="block text-sm font-bold text-gray-700 mb-2 group-focus-within:text-brand-pink transition-colors">شماره تماس</label>
            <input 
              type="tel" 
              required
              className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-brand-pink/50 outline-none transition-all placeholder-gray-400 font-medium ltr text-right"
              placeholder="...0912"
            />
          </div>
        </div>

        {/* ۲. انتخاب سرویس (در صورت نیاز) */}
        {!isServicePreDetermined && (
          <div className="animate-fadeIn">
            <label className="block text-sm font-bold text-gray-700 mb-3">انتخاب نوع خدمات</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceSlug(service.slug)}
                  className={`cursor-pointer relative border-2 rounded-2xl p-4 flex items-center gap-4 transition-all duration-200 group
                    ${selectedServiceSlug === service.slug
                      ? 'border-brand-pink bg-brand-pink/5 shadow-md'
                      : 'border-gray-100 hover:border-brand-pink/30 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className={`p-3 rounded-full text-xl transition-colors duration-300 flex items-center justify-center w-12 h-12 ${
                    selectedServiceSlug === service.slug ? 'bg-brand-pink text-white' : 'bg-white text-gray-400 group-hover:text-brand-pink shadow-sm'
                  }`}>
                    {getServiceIcon(service.iconKey, 20)}
                  </div>
                  <div>
                    <div className={`font-bold text-sm mb-0.5 ${selectedServiceSlug === service.slug ? 'text-brand-green-dark' : 'text-gray-700'}`}>
                      {service.title}
                    </div>
                    <div className="text-xs text-gray-400 font-medium line-clamp-1">{service.description}</div>
                  </div>
                  
                  {selectedServiceSlug === service.slug && (
                    <div className="absolute top-3 left-3 text-brand-pink">
                      <FaCheckCircle />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ۳. انتخاب زمان */}
        <div className="animate-fadeIn space-y-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
              <FaCalendarDay className="text-brand-pink" />
              انتخاب روز
            </label>
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
              {nextDays.map((day) => (
                <div
                  key={day.id}
                  onClick={() => setSelectedDateId(day.id)}
                  className={`flex-shrink-0 w-20 h-24 rounded-2xl border-2 cursor-pointer flex flex-col items-center justify-center gap-1 transition-all duration-200
                    ${selectedDateId === day.id
                      ? 'border-brand-pink bg-brand-pink text-white shadow-lg shadow-brand-pink/30 scale-105'
                      : 'border-gray-100 bg-white text-gray-500 hover:border-brand-pink/30 hover:bg-gray-50'
                    }
                  `}
                >
                  <span className="text-xs font-medium opacity-80">{day.dayName}</span>
                  <span className="text-2xl font-bold">{day.dayNumber}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedDateId !== null && (
            <div className="animate-fadeIn">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-3">
                <FaClock className="text-brand-pink" />
                انتخاب ساعت
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {AVAILABLE_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button" // جلوگیری از سابمیت فرم
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 rounded-xl text-sm font-bold border-2 transition-all duration-200
                      ${selectedTime === time
                        ? 'border-brand-green bg-brand-green-light/10 text-brand-green-dark shadow-md'
                        : 'border-gray-100 bg-white text-gray-600 hover:border-brand-green/30'
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* دکمه ثبت نهایی */}
        <button 
          type="submit"
          disabled={!selectedTime || !selectedDateId}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl
            ${(!selectedTime || !selectedDateId)
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-brand-pink hover:bg-brand-pink-dark text-white shadow-brand-pink/20 hover:shadow-brand-pink/40 hover:-translate-y-1'
            }
          `}
        >
          <FaCheckCircle className={(!selectedTime || !selectedDateId) ? "" : "animate-pulse"} />
          <span>ثبت نهایی و دریافت نوبت</span>
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400 font-medium">
          پس از ثبت، پیامک تایید شامل تاریخ و ساعت دقیق برای شما ارسال خواهد شد.
        </p>
      </div>
    </div>
  );
}