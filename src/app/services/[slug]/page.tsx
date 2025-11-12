import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServicePortfolioGrid from '@/components/sections/ServicePortfolioGrid';
import { getServiceBySlug, getEnrichedPortfolioItemsByService } from '@/lib/data';

/* -------------------------------------------------------------------------- */
/*                               تایپ‌های محلی                                */
/* -------------------------------------------------------------------------- */
type Props = {
  params: Promise<{ slug: string }>;
};

/* -------------------------------------------------------------------------- */
/*                               METADATA                                     */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'خدمت یافت نشد',
      description: 'صفحهٔ مورد نظر وجود ندارد.',
    };
  }

  return {
    title: `خدمات ${service.title} | سالن زیبایی اینساید`,
    description: service.description,
  };
}

/* -------------------------------------------------------------------------- */
/*                               PAGE COMPONENT                               */
/* -------------------------------------------------------------------------- */
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;

  const [service, portfolioItems] = await Promise.all([
    getServiceBySlug(slug),
    getEnrichedPortfolioItemsByService(slug),
  ]);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background-light min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="container mx-auto px-6 py-12">
          <header className="mb-10 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto md:mx-0">
              {service.description}
            </p>
          </header>

          <ServicePortfolioGrid
            serviceTitle={service.title}
            portfolioItems={portfolioItems}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const revalidate = 60;