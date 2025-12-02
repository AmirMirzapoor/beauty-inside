import StatsGrid from "@/components/dashboard/StatsGrid";
import RecentBookings from "@/components/dashboard/RecentBookings";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">پیشخوان</h1>
        <p className="text-gray-500 mt-1">خوش آمدید، نگاهی به وضعیت امروز بیندازید.</p>
      </div>

      <StatsGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentBookings />
        </div>
        
        {/* ویجت تقویم کوچک یا اعلان‌ها (Placeholder) */}
        <div className="bg-brand-pink text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-4">ارتقای پروفایل</h3>
            <p className="mb-6 opacity-90 leading-relaxed">
              با تکمیل نمونه‌کارهای خود، شانس دیده شدن در صفحه اول را تا ۳ برابر افزایش دهید!
            </p>
            <button className="bg-white text-brand-pink px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors">
              افزودن نمونه‌کار جدید
            </button>
          </div>
          {/* پترن تزیینی */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full"></div>
             <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}