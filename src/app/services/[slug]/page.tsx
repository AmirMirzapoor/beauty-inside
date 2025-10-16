import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getPortfolioItemsByService, getArtistById } from '@/lib/data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MotionWrapper from '@/components/common/MotionWrapper';
import { staggerContainer, itemVariants } from '@/components/common/animations';

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  const portfolioItems = getPortfolioItemsByService(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background-light">
      <Header />
      <main className="min-h-screen pt-24">
        <section className="bg-background-section py-16 text-center">
          <div className="container mx-auto px-6">
            <MotionWrapper variants={itemVariants} className="mb-4 inline-block rounded-full bg-accent-pink/20 p-4 text-accent-pink">
              {service.icon}
            </MotionWrapper>
            <MotionWrapper variants={itemVariants} transition={{ delay: 0.2 }}>
              <h1 className="text-4xl font-bold text-brand-green-dark md:text-5xl">{service.title}</h1>
            </MotionWrapper>
            <MotionWrapper variants={itemVariants} transition={{ delay: 0.4 }}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">{service.description}</p>
            </MotionWrapper>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-brand-green-dark">نمونه‌کارها</h2>

            {portfolioItems.length > 0 ? (
              <MotionWrapper
                tag="div"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {portfolioItems.map((item) => {
                  const artist = getArtistById(item.artistId);
                  return (
                    <MotionWrapper
                      key={item.id}
                      tag="div"
                      variants={itemVariants}
                      className="overflow-hidden rounded-2xl bg-white shadow-lg group"
                    >
                      <div className="relative h-80 w-full">
                        <Image
                          src={item.image}
                          alt={`نمونه کار ${service.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="bg-white p-6">
                        {artist && (
                          <Link href={`/artists/${artist.id}`} className="group/artist flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent-pink/50">
                              <Image
                                src={artist.profilePic}
                                alt={artist.name}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-brand-green-dark transition-colors group-hover/artist:text-accent-pink">
                                {artist.name}
                              </p>
                              <p className="text-sm text-gray-500">{artist.specialty}</p>
                            </div>
                          </Link>
                        )}
                      </div>
                    </MotionWrapper>
                  );
                })}
              </MotionWrapper>
            ) : (
              <p className="text-center text-lg text-gray-500">در حال حاضر نمونه‌کاری برای این خدمت ثبت نشده است.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
