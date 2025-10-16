import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  getServiceBySlug,
  getPortfolioItemsByService,
  getArtistById,
} from '@/lib/data';
import MotionWrapper from '@/components/common/MotionWrapper';
import { staggerContainer, itemVariants } from '@/components/common/animations';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const portfolioItems = getPortfolioItemsByService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background-light">
      <Header />
      <main className="pt-24 min-h-screen">
        {/* Hero Banner for the Service */}
        <section className="bg-background-section py-16 text-center">
          <div className="container mx-auto px-6">
            <MotionWrapper
              variants={itemVariants}
              className="inline-block p-4 rounded-full bg-accent-pink/20 text-accent-pink mb-4"
            >
              {service.icon}
            </MotionWrapper>
            <MotionWrapper
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark">
                {service.title}
              </h1>
            </MotionWrapper>
            <MotionWrapper
              variants={itemVariants}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                {service.description}
              </p>
            </MotionWrapper>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-green-dark">
              نمونه‌کارها
            </h2>

            {portfolioItems.length > 0 ? (
              <MotionWrapper
                tag="div"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {portfolioItems.map((item) => {
                  const artist = getArtistById(item.artistId);
                  return (
                    <MotionWrapper
                      tag="div"
                      key={item.id}
                      variants={itemVariants}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                    >
                      <div className="relative w-full h-80">
                        <Image
                          src={item.image}
                          alt={`نمونه کار ${service.title}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 bg-white">
                        {artist && (
                          <Link
                            href={`/artists/${artist.id}`}
                            className="flex items-center space-x-3 space-x-reverse group/artist"
                          >
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent-pink/50">
                              <Image
                                src={artist.profilePic}
                                alt={artist.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-brand-green-dark group-hover/artist:text-accent-pink transition-colors">
                                {artist.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {artist.specialty}
                              </p>
                            </div>
                          </Link>
                        )}
                      </div>
                    </MotionWrapper>
                  );
                })}
              </MotionWrapper>
            ) : (
              <p className="text-center text-gray-500 text-lg">
                در حال حاضر نمونه‌کاری برای این خدمت ثبت نشده است.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}