import type { Metadata } from "next";
import { Suspense } from "react";
import SectionTitle from "@/components/common/Titles";
import StructuredData from "@/components/common/StructuredData";
import { FaPhoneAlt } from "react-icons/fa"; 
import BookingForm from "@/components/booking/BookingForm";

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
            subtitle="برای دریافت مشاوره و رزرو وقت، فرم زیر را پر کنید" 
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
            
            {/* ستون اول: فرم هوشمند */}
            <div className="order-2 lg:order-1">
               <Suspense fallback={<div className="h-96 bg-white rounded-3xl animate-pulse shadow-xl"></div>}>
                  <BookingForm />
               </Suspense>
            </div>

            {/* ستون دوم: اطلاعات تماس (ثابت) */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="bg-brand-green-dark text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-4">نیاز به مشاوره تلفنی دارید؟</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  اگر هنوز مطمئن نیستید چه خدماتی برای شما مناسب است، می‌توانید مستقیماً با ما تماس بگیرید.
                </p>
                <a href="tel:+982112345678" className="flex items-center gap-4 text-white hover:text-brand-pink transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-pink-light transition-colors">
                      <FaPhoneAlt />
                    </div>
                    <span className="text-xl font-bold text-left" dir="ltr">
                      021 1234 5678
                    </span>
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">سوالات متداول رزرو</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-pink flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">آیا برای رزرو نیاز به پرداخت بیعانه است؟ <br/><span className="text-gray-400">بله، برای تثبیت نوبت مبلغ کمی دریافت می‌شود.</span></p>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-brand-pink flex-shrink-0"></div>
                    <p className="text-sm text-gray-600">چقدر قبل از نوبت باید در سالن باشم؟ <br/><span className="text-gray-400">لطفاً ۱۰ دقیقه قبل از ساعت رزرو تشریف بیاورید.</span></p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}