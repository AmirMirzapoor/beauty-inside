import type { Metadata } from "next";
import SectionTitle from "@/components/common/Titles";
import StructuredData from "@/components/common/StructuredData";
import { FaCalendarAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "رزرو نوبت آنلاین | سالن زیبایی درون",
  description: "به راحتی و در کمترین زمان نوبت خدمات زیبایی خود را رزرو کنید.",
};

export default function BookingPage() {
  return (
    <>
      <StructuredData type="Organization" />
      
      <main className="min-h-screen bg-background-light pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="رزرو نوبت" 
            subtitle="برای دریافت مشاوره و رزرو وقت، از روش‌های زیر اقدام کنید" 
          />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
            
            {/* باکس اطلاعات تماس */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">تماس مستقیم</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                کارشناسان ما همه روزه از ساعت ۹ صبح تا ۹ شب آماده پاسخگویی و مشاوره رایگان به شما عزیزان هستند.
              </p>
              
              <div className="space-y-6">
                <a href="tel:+982112345678" className="flex items-center gap-4 text-gray-700 hover:text-brand-pink transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-brand-green-light/10 flex items-center justify-center group-hover:bg-brand-pink/10 transition-colors">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <span className="text-xl font-bold ltr">+98 21 1234 5678</span>
                </a>

                <a href="https://wa.me/989123456789" className="flex items-center gap-4 text-gray-700 hover:text-green-600 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <FaWhatsapp className="text-2xl text-green-600" />
                  </div>
                  <span className="text-xl font-bold">ارسال پیام در واتس‌اپ</span>
                </a>
              </div>
            </div>

            {/* باکس فرم یا لینک سامانه */}
            <div className="bg-brand-green-dark text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaCalendarAlt />
                سامانه نوبت‌دهی آنلاین
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                به زودی سامانه هوشمند رزرو آنلاین ما راه‌اندازی می‌شود. تا آن زمان می‌توانید از طریق دکمه زیر در لیست انتظار قرار بگیرید.
              </p>
              
              <button className="w-full py-4 bg-brand-pink hover:bg-white hover:text-brand-pink text-white rounded-xl font-bold transition-all duration-300 shadow-lg">
                ثبت نام در لیست انتظار
              </button>

              <div className="mt-8 pt-8 border-t border-white/10 text-sm text-gray-400">
                <p>✨ اولویت با کسانی است که زودتر تماس بگیرند.</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}