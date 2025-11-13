import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArtistBySlug, getEnrichedPortfolioItemsByArtist, getAllArtistSlugs } from '@/lib/data';
import ArtistInfoCard from '@/components/sections/ArtistInfoCard';
import ArtistPortfolioGrid from '@/components/sections/ArtistPortfolioGrid';
import ArtistProfileSkeleton from '@/components/skeletons/ArtistProfileSkeleton';
import { Suspense } from 'react';

/* -------------------------------------------------------------------------- */
/*                          STATIC PATHS (ISR)                                */
/* -------------------------------------------------------------------------- */
export async function generateStaticParams() {
  const slugs = getAllArtistSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* -------------------------------------------------------------------------- */
/*                              TYPES & PROPS                                 */
/* -------------------------------------------------------------------------- */
type Props = {
  params: Promise<{ slug: string }>;
};

/* -------------------------------------------------------------------------- */
/*                             METADATA (SEO)                                 */
/* -------------------------------------------------------------------------- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artist = await getArtistBySlug(slug);

  if (!artist) {
    return {
      title: 'هنرمند یافت نشد | سالن زیبای درون',
      description: 'صفحهٔ مورد نظر وجود ندارد.',
    };
  }

  return {
    title: `${artist.name} | ${artist.specialty}`,
    description: `${artist.bio.substring(0, 160)}...`,
    openGraph: {
      title: `${artist.name} | ${artist.specialty}`,
      description: artist.bio,
      images: [
        {
          url: artist.profilePic,
          width: 500,
          height: 500,
          alt: `تصویر پروفایل ${artist.name}`,
        },
      ],
      type: 'profile',
      locale: 'fa_IR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${artist.name} | ${artist.specialty}`,
      description: artist.bio,
      images: [artist.profilePic],
    },
    alternates: {
      canonical: `/artists/${slug}`,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                        MAIN PAGE COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export default async function ArtistProfilePage({ params }: Props) {
  const { slug } = await params;

  // ✅ Fetch data in parallel
  const [artist, portfolioItems] = await Promise.all([
    getArtistBySlug(slug),
    getEnrichedPortfolioItemsByArtist(slug),
  ]);

  // ✅ Handle 404
  if (!artist) {
    notFound();
  }

  return (
    <main className="bg-background-light min-h-screen">
      {/* ✅ Suspense for streaming */}
      <Suspense fallback={<ArtistProfileSkeleton />}>
        {/* Artist Info Section */}
        <section className="container mx-auto px-6 py-12">
          <ArtistInfoCard artist={artist} />
        </section>

        {/* Portfolio Section */}
        <section className="container mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-brand-green-dark">
            نمونه‌کارهای {artist.name}
          </h2>
          <ArtistPortfolioGrid items={portfolioItems} />
        </section>
      </Suspense>
    </main>
  );
}

// ✅ ISR: Revalidate every hour
export const revalidate = 3600;