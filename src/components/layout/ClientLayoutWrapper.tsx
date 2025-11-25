"use client";

import FloatingBookingBtn from "@/components/ui/FloatingBookingBtn";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingBookingBtn />
    </>
  );
}