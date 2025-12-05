"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaCalendarAlt, FaUser, FaImages, FaCog, FaSignOutAlt } from "react-icons/fa";
import Cookies from "js-cookie";

const MENU_ITEMS = [
  { name: "پیشخوان", path: "/dashboard", icon: <FaHome /> },
  { name: "مدیریت نوبت‌ها", path: "/dashboard/bookings", icon: <FaCalendarAlt /> },
  { name: "مدیریت نمونه‌کارها", path: "/dashboard/portfolio", icon: <FaImages /> },
  { name: "پروفایل من", path: "/dashboard/profile", icon: <FaUser /> },
  { name: "تنظیمات", path: "/dashboard/settings", icon: <FaCog /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // ✅ پاک کردن ساده کوکی با js-cookie
    Cookies.remove("auth_token", { path: "/" }); // path مهم است تا مطمئن شویم کوکی درست پاک می‌شود
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-brand-green-dark text-white h-screen fixed right-0 top-0 flex flex-col shadow-2xl z-50">
      <div className="p-6 border-b border-white/10 flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center font-bold">B</div>
        <span className="text-xl font-bold">پنل متخصصان</span>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? "bg-brand-pink text-white shadow-lg shadow-brand-pink/30" 
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              <span className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "" : "text-gray-400 group-hover:text-white"}`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-300 hover:bg-red-500/10 hover:text-red-200 rounded-xl transition-colors"
        >
          <FaSignOutAlt />
          <span>خروج از حساب</span>
        </button>
      </div>
    </aside>
  );
}