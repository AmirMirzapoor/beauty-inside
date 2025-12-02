interface Booking {
    id: number; // شناسه رزرو
    customer: string; // نام مشتری
    service: string;
    date: string; // تاریخ ورود (به فرمت ISO 8601)
    time: string;
    status: StatusKey; // وضعیت رزرو (مثل confirmed, pending)
    price: string;
}

const bookings: Booking[] = [
    { id: 1, customer: "مینا رحیمی", service: "رنگ و لایت", date: "1403/09/12", time: "10:00", status: "confirmed", price: "2,500,000" },
    { id: 2, customer: "زهرا نادری", service: "کوتاهی ژورنالی", date: "1403/09/12", time: "11:30", status: "pending", price: "350,000" },
    { id: 3, customer: "الناز شاکردوست", service: "کراتین مو", date: "1403/09/12", time: "14:00", status: "completed", price: "4,000,000" },
    { id: 4, customer: "مریم کاویانی", service: "بافت مو", date: "1403/09/13", time: "09:00", status: "cancelled", price: "150,000" },
];

type Status = {
    bg: string;
    text: string;
    label: string;
};

type StatusKey = 'confirmed' | 'pending' | 'completed' | 'cancelled';

const statusStyles: Record<StatusKey, Status> = {
confirmed: { bg: "bg-green-100", text: "text-green-700", label: "تایید شده" },
pending: { bg: "bg-yellow-100", text: "text-yellow-700", label: "در انتظار" },
completed: { bg: "bg-blue-100", text: "text-blue-700", label: "انجام شده" },
cancelled: { bg: "bg-red-100", text: "text-red-700", label: "لغو شده" },
};
  
  
export default function RecentBookings() {
return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-bold text-lg text-gray-800">آخرین نوبت‌ها</h3>
        <button className="text-sm text-brand-pink hover:underline">مشاهده همه</button>
    </div>
    <div className="overflow-x-auto">
        <table className="w-full">
        <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
            <th className="py-4 px-6 text-right">مشتری</th>
            <th className="py-4 px-6 text-right">خدمت</th>
            <th className="py-4 px-6 text-right">تاریخ و ساعت</th>
            <th className="py-4 px-6 text-right">مبلغ (تومان)</th>
            <th className="py-4 px-6 text-center">وضعیت</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
            {bookings.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-800">{booking.customer}</td>
                <td className="py-4 px-6 text-gray-600">{booking.service}</td>
                <td className="py-4 px-6 text-gray-600 font-mono text-sm">{booking.date} - {booking.time}</td>
                <td className="py-4 px-6 text-gray-800 font-bold">{booking.price}</td>
                <td className="py-4 px-6 text-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${statusStyles[booking.status].bg} ${statusStyles[booking.status].text}`}>
                    {statusStyles[booking.status].label}
                </span>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
}