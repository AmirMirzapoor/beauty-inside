"use client";

import { FaBell, FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 h-20 px-8 flex items-center justify-between sticky top-0 z-40">
      
      {/* جستجو */}
      <div className="relative w-96 hidden md:block">
        <input 
          type="text" 
          placeholder="جستجو در نوبت‌ها..." 
          className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-pink/20 transition-all outline-none"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-400" />
      </div>

      {/* پروفایل و اعلان */}
      <div className="flex items-center gap-6 mr-auto">
        <button className="relative text-gray-500 hover:text-brand-pink transition-colors">
          <FaBell className="text-xl" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-left hidden sm:block">
            <p className="text-sm font-bold text-gray-800">سارا اکبری</p>
            <p className="text-xs text-gray-500">متخصص رنگ مو</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-brand-pink/20">
             {/* در پروژه واقعی عکس کاربر لاگین شده را نشان می‌دهید */}
             <Image src="/images/artists/artist1.png" alt="Profile" width={40} height={40} />
          </div>
        </div>
      </div>
    </header>
  );
}