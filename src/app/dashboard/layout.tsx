import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* سایدبار ثابت سمت راست */}
      <Sidebar />

      {/* محتوای اصلی */}
      <div className="flex-1 mr-64 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}