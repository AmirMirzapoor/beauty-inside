import type { FC } from 'react';

interface ServiceDetailSkeletonProps {
  /** تعداد آیتم‌های نمونه‌کار برای نمایش (پیش‌فرض: ۶) */
  itemCount?: number;
}

/**
 * Skeleton loader برای صفحه جزئیات خدمت
 * با پشتیبانی کامل از دسترس‌پذیری (ARIA) و بهینه‌سازی Performance
 * @version 1.0.0
 */
const ServiceDetailSkeleton: FC<ServiceDetailSkeletonProps> = ({ itemCount = 6 }) => {
  return (
    <div 
      className="animate-pulse bg-background-light min-h-screen pt-24" 
      role="status"
      aria-label="در حال بارگذاری صفحه خدمت"
    >
      <div className="container mx-auto px-6 py-12">
        {/* بخش عنوان */}
        <header className="mb-10 text-center md:text-right">
          <div className="h-12 bg-gray-300 rounded w-3/4 mb-4 mx-auto md:mx-0"></div>
          <div className="h-6 bg-gray-300 rounded w-full max-w-3xl mx-auto md:mx-0 mb-8"></div>
        </header>
        
        {/* گرید نمونه‌کارها */}
        <section 
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          aria-label="نمونه کارهای در حال بارگذاری"
        >
          {Array.from({ length: itemCount }).map((_, index) => (
            <article 
              key={`skeleton-item-${index}`}
              className="rounded-2xl bg-white shadow-lg overflow-hidden"
              aria-hidden="true"
            >
              {/* تصویر اسکلتون */}
              <div className="aspect-[4/5] bg-gray-300"></div>
              
              {/* اطلاعات آرتیست اسکلتون */}
              <div className="p-5">
                <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </article>
          ))}
        </section>
      </div>
      
      {/* متن پنهان برای screen readers */}
      <span className="sr-only">لطفاً صبر کنید، صفحه در حال بارگذاری است...</span>
    </div>
  );
};

export default ServiceDetailSkeleton;