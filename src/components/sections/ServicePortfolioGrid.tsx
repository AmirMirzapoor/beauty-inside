"use client";

import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "@/components/common/MotionWrapper";
import { staggerContainer, itemVariants } from "@/components/common/animations";
import type { PortfolioItem, Artist, Service } from "@/components/common/types";

interface EnrichedPortfolioItem extends PortfolioItem {
  artist?: Artist;
}

interface Props {
  service: Service;
  portfolioItems: EnrichedPortfolioItem[];
}

export default function ServicePortfolioGrid({
  service,
  portfolioItems,
}: Props) {
  if (portfolioItems.length === 0) {
    return (
      <p className="text-center text-lg text-gray-500">
        در حال حاضر نمونه‌کاری برای این خدمت ثبت نشده است.
      </p>
    );
  }

  return (
    <MotionWrapper
      tag="div"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {portfolioItems.map((item) => (
        <MotionWrapper
          tag="div"
          key={item.id}
          variants={itemVariants}
          className="overflow-hidden rounded-2xl bg-white shadow-lg group"
        >
          <div className="relative h-80 w-full">
            <Image
              src={item.image}
              alt={`نمونه کار ${service.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {item.artist && (
            <div className="bg-white p-6">
              <Link
                href={`/artists/${item.artist.id}`}
                className="group/artist flex items-center space-x-3 space-x-reverse"
              >
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent-pink/50">
                  <Image
                    src={item.artist.profilePic}
                    alt={item.artist.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-green-dark transition-colors group-hover/artist:text-accent-pink">
                    {item.artist.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.artist.specialty}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </MotionWrapper>
      ))}
    </MotionWrapper>
  );
}
