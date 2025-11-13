import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ServicePortfolioGrid from '@/components/sections/ServicePortfolioGrid';
import { getServiceBySlug, getEnrichedPortfolioItemsByService, getAllServiceSlugs } from '@/lib/data';

/* -------------------------------------------------------------------------- */
/*                     STATIC PATHS GENERATION (ISR)                          */
/* -------------------------------------------------------------------------- */
// ✅ این باعث Build-Time Pre-rendering برای تمام صفحات سرویس می‌شود
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* -------------------------------------------------------------------------- */
/*                          TYPES & INTERFACES                                */
/* -------------------------------------------------------------------------- */
type Props = {
  params: Promise<{ slug: string }>;
};

/* -------------------------------------------------------------------------- */
/*                           METADATA (SEO)                                   */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'خدمت یافت نشد | سالن زیبایی اینساید',
      description: 'صفحهٔ مورد نظر وجود ندارد.',
    };
  }

  const title = `خدمات ${service.title} | سالن زیبایی اینساید`;
  const description = service.description;

  return {
    title,
    description,
    // ✅ Open Graph برای بهبود اشتراک‌گذاری در شبکه‌های اجتماعی
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'fa_IR',
      siteName: 'سالن زیبایی اینساید',
    },
    // ✅ Twitter Card
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    // ✅ Canonical URL برای SEO
    alternates: {
      canonical: `/services/${slug}`,
    },
    // ✅ Structured Data (JSON-LD)
    other: {
      'ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'LocalBusiness',
          name: 'سالن زیبای درون',
        },
      }),
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                        MAIN PAGE COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  // ✅ Parallel Data Fetching با Error Handling
  const [service, portfolioItems] = await Promise.all([
    getServiceBySlug(slug),
    getEnrichedPortfolioItemsByService(slug),
  ]);

  // ✅ Guard Clause
  if (!service) {
    notFound();
  }

  // ✅ Data for the page
  const pageData = {
    service,
    portfolioItems,
    title: service.title,
    description: service.description,
  };

  return (
    <main className="bg-background-light min-h-screen">
      {/* ✅ Header removed - now in app/layout.tsx */}
      
      {/* ✅ استفاده از semantic HTML */}
      <article className="pt-24">
        <header className="container mx-auto px-6 py-12 text-center md:text-right">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark leading-tight">
            {pageData.title}
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto md:mx-0 leading-relaxed">
            {pageData.description}
          </p>
        </header>

        <section
          aria-label={`نمونه کارهای ${pageData.title}`}
          className="container mx-auto px-6 pb-16"
        >
          <ServicePortfolioGrid
            serviceTitle={pageData.title}
            portfolioItems={pageData.portfolioItems}
          />
        </section>
      </article>
    </main>
  );
}

// ✅ ISR با بازه 1 ساعت برای به‌روزرسانی محتوا
export const revalidate = 3600; // 1 hour instead of 60 seconds