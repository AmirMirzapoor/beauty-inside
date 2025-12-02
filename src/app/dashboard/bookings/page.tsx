"use client";

import { useState } from "react";
import { FaCheck, FaTimes, FaTrash, FaFilter, FaSearch } from "react-icons/fa";
import Toast from "@/components/ui/Toast";
import { useToast } from "@/hooks/useToast";

// ۱. تعریف تایپ‌های دقیق
type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

interface Booking {
  id: number;
  customer: string;
  service: string;
  date: string;
  time: string;
  status: BookingStatus;
  price: string;
  phone: string;
}

interface StatusConfigItem {
  label: string;
  bg: string;
  text: string;
}

// دیتای اولیه با تایپ صحیح
const initialBookings: Booking[] = [
  { id: 1, customer: "مینا رحیمی", service: "رنگ و لایت", date: "1403/09/12", time: "10:00", status: "pending", price: "2,500,000", phone: "09121111111" },
  { id: 2, customer: "زهرا نادری", service: "کوتاهی ژورنالی", date: "1403/09/12", time: "11:30", status: "confirmed", price: "350,000", phone: "09122222222" },
  { id: 3, customer: "الناز شاکردوست", service: "کراتین مو", date: "1403/09/12", time: "14:00", status: "completed", price: "4,000,000", phone: "09123333333" },
  { id: 4, customer: "مریم کاویانی", service: "بافت مو", date: "1403/09/13", time: "09:00", status: "cancelled", price: "150,000", phone: "09124444444" },
  { id: 5, customer: "سارا امیری", service: "مانیکور", date: "1403/09/14", time: "16:00", status: "pending", price: "200,000", phone: "09125555555" },
];

// ۲. جایگزینی any با Record
const statusConfig: Record<BookingStatus, StatusConfigItem> = {
  pending: { label: "در انتظار", bg: "bg-yellow-100", text: "text-yellow-700" },
  confirmed: { label: "تایید شده", bg: "bg-green-100", text: "text-green-700" },
  completed: { label: "انجام شده", bg: "bg-blue-100", text: "text-blue-700" },
  cancelled: { label: "لغو شده", bg: "bg-red-100", text: "text-red-700" },
};

export default function BookingsManagement() {
  const [bookings, setBookings] = useState<Booking[]>(initialBookings);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const { toast, showToast, hideToast } = useToast();

  const handleStatusChange = (id: number, newStatus: BookingStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
    if (newStatus === "confirmed") showToast("نوبت با موفقیت تایید شد", "success");
    if (newStatus === "cancelled") showToast("نوبت لغو شد", "error");
  };

  const handleDelete = (id: number) => {
    if (confirm("آیا از حذف این نوبت اطمینان دارید؟")) {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      showToast("نوبت از لیست حذف گردید", "info");
    }
  };

  const filteredBookings = bookings.filter((b) => {
    const matchesFilter = filter === "all" || b.status === filter;
    const matchesSearch = b.customer.includes(search) || b.phone.includes(search);
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      <Toast {...toast} onClose={hideToast} />

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">مدیریت نوبت‌ها</h1>
          <p className="text-gray-500 mt-1">لیست تمام درخواست‌های رزرو شده</p>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <input 
              type="text" 
              placeholder="جستجو نام یا تلفن..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none transition-all"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="relative">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-brand-pink focus:ring-2 focus:ring-brand-pink/20 outline-none cursor-pointer"
            >
              <option value="all">همه وضعیت‌ها</option>
              <option value="pending">در انتظار</option>
              <option value="confirmed">تایید شده</option>
              <option value="cancelled">لغو شده</option>
            </select>
            <FaFilter className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-500 text-sm">
              <tr>
                <th className="py-4 px-6 text-right">مشتری</th>
                <th className="py-4 px-6 text-right">اطلاعات تماس</th>
                <th className="py-4 px-6 text-right">خدمت</th>
                <th className="py-4 px-6 text-right">زمان</th>
                <th className="py-4 px-6 text-center">وضعیت</th>
                <th className="py-4 px-6 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredBookings.length > 0 ? (
                filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="py-4 px-6 font-medium text-gray-800">{booking.customer}</td>
                    <td className="py-4 px-6 text-gray-600 font-mono text-sm">{booking.phone}</td>
                    <td className="py-4 px-6 text-gray-600">{booking.service}</td>
                    <td className="py-4 px-6 text-gray-600">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-700">{booking.time}</span>
                        <span className="text-xs text-gray-400">{booking.date}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusConfig[booking.status].bg} ${statusConfig[booking.status].text}`}>
                        {statusConfig[booking.status].label}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                        {booking.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => handleStatusChange(booking.id, 'confirmed')}
                              className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                              title="تایید نوبت"
                            >
                              <FaCheck />
                            </button>
                            <button 
                              onClick={() => handleStatusChange(booking.id, 'cancelled')}
                              className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                              title="رد نوبت"
                            >
                              <FaTimes />
                            </button>
                          </>
                        )}
                        <button 
                          onClick={() => handleDelete(booking.id)}
                          className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-red-500 transition-colors"
                          title="حذف"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-400">
                    موردی یافت نشد.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}