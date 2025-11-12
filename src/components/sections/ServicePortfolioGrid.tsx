import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "@/components/common/MotionWrapper";
import { staggerContainer, itemVariants } from "@/components/common/animations";
import type { EnrichedPortfolioItem } from "@/lib/data";
import type { Artist } from "@/components/common/types";

interface Props {
  serviceTitle: string;
  portfolioItems: EnrichedPortfolioItem[];
}

export default function ServicePortfolioGrid({
  serviceTitle,
  portfolioItems,
}: Props) {
  if (!portfolioItems || portfolioItems.length === 0) {
    return (
      <div className="col-span-full py-12 text-center">
        <p className="text-lg text-gray-500">
          در حال حاضر نمونه‌کاری برای خدمت <span className="font-medium">{serviceTitle}</span> ثبت نشده است.
        </p>
      </div>
    );
  }

  return (
    <MotionWrapper
      tag="div"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "-100px" }}
      className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {portfolioItems.map((item) => (
        <PortfolioCard
          key={item.id}
          item={item}
          serviceTitle={serviceTitle}
        />
      ))}
    </MotionWrapper>
  );
}

interface PortfolioCardProps {
  item: EnrichedPortfolioItem;
  serviceTitle: string;
}

function PortfolioCard({ item, serviceTitle }: PortfolioCardProps) {
  const alt = item.alt || `نمونه کار ${serviceTitle}${item.artist ? ` توسط ${item.artist.name}` : ""}`;

  return (
    <MotionWrapper
      tag="article"
      variants={itemVariants}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
    >
      {/* تصویر */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          placeholder="empty"
        />
      </div>

      {/* اطلاعات آرتیست */}
      {item.artist && <ArtistInfo artist={item.artist} />}
    </MotionWrapper>
  );
}

function ArtistInfo({ artist }: { artist: Artist }) {
  return (
    <div className="p-5">
      <Link
        href={`/artists/${artist.slug}`}
        className="flex items-center gap-3 transition-colors hover:text-accent-pink"
        prefetch={false}
      >
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent-pink/30">
          <Image
            src={artist.profilePic}
            alt={artist.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-brand-green-dark transition-colors group-hover:text-accent-pink">
            {artist.name}
          </p>
          <p className="truncate text-sm text-gray-500">{artist.specialty}</p>
        </div>
      </Link>
    </div>
  );
}