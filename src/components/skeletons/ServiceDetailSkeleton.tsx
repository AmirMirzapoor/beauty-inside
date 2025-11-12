export default function ServiceDetailSkeleton() {
    return (
      <div className="animate-pulse bg-background-light min-h-screen pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* عنوان */}
          <div className="h-12 bg-gray-300 rounded w-3/4 mb-4 mx-auto md:mx-0"></div>
          <div className="h-6 bg-gray-300 rounded w-full max-w-3xl mx-auto md:mx-0 mb-8"></div>
          
          {/* گرید نمونه‌کارها */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-white shadow-lg overflow-hidden">
                <div className="aspect-[4/5] bg-gray-300"></div>
                <div className="p-5">
                  <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }