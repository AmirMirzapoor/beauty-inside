import type { FC } from 'react';

interface ServicePortfolioSkeletonProps {
  /** تعداد آیتم‌های نمونه‌کار (پیش‌فرض: ۶) */
  itemCount?: number;
  /** کلاس‌های اضافی Tailwind */
  className?: string;
  /** تعداد ستون‌ها (md:grid-cols-X) */
  columns?: 2 | 3 | 4;
}

/**
 * Skeleton loader مینیمال فقط برای گرید نمونه‌کارها
 * مناسب برای استفاده در صفحات مختلف بدون هدر و توضیحات
 * @version 1.0.0
 */
const ServicePortfolioSkeleton: FC<ServicePortfolioSkeletonProps> = ({ 
  itemCount = 6,
  className = '',
  columns = 3,
}) => {
  // ✅ ساخت کلاس گرید بر اساس prop
  const gridClasses = `grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-${columns}`;

  return (
    <section 
      className={`${gridClasses} ${className}`}
      aria-label="نمونه کارهای در حال بارگذاری"
      role="status"
    >
      {Array.from({ length: itemCount }).map((_, index) => (
        <article 
          key={`portfolio-skeleton-${index}`}
          className="rounded-2xl bg-white shadow-lg overflow-hidden"
          aria-hidden="true"
        >
          {/* اسکلتون تصویر */}
          <div className="aspect-[4/5] bg-gray-300"></div>
          
          {/* اسکلتون اطلاعات آرتیست */}
          <div className="p-5">
            <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </article>
      ))}
      
      {/* پیام برای screen readers */}
      <span className="sr-only">در حال بارگذاری نمونه کارها...</span>
    </section>
  );
};

export default ServicePortfolioSkeleton;