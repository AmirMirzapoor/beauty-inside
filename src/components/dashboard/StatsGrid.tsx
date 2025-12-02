import { FaCalendarCheck, FaUsers, FaWallet, FaChartLine } from "react-icons/fa";

const stats = [
  { title: "نوبت‌های امروز", value: "8", icon: <FaCalendarCheck />, color: "bg-blue-500", change: "+2 نسبت به دیروز" },
  { title: "مجموع درآمد ماه", value: "45,200,000", suffix: "تومان", icon: <FaWallet />, color: "bg-brand-green", change: "+15% رشد" },
  { title: "مشتریان جدید", value: "124", icon: <FaUsers />, color: "bg-brand-pink", change: "+5 این هفته" },
  { title: "بازدید پروفایل", value: "3.2k", icon: <FaChartLine />, color: "bg-purple-500", change: "+12% افزایش" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {stat.value} <span className="text-xs font-normal text-gray-400">{stat.suffix}</span>
              </h3>
            </div>
            <div className={`p-3 rounded-xl text-white ${stat.color} shadow-lg shadow-gray-200`}>
              {stat.icon}
            </div>
          </div>
          <p className="text-xs font-medium text-green-600 flex items-center gap-1 bg-green-50 w-fit px-2 py-1 rounded-lg">
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}