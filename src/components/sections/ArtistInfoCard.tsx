import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCalendarCheck, FaHistory } from "react-icons/fa";
import type { Artist } from "@/components/common/types";

interface Props {
  artist: Artist;
}

export default function ArtistInfoCard({ artist }: Props) {
  return (
    <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
  
      {/* تصویر */}
      <div className="relative w-full md:w-72 h-72 md:h-auto flex-shrink-0 bg-gray-100">
        <Image
          src={artist.profilePic}
          alt={`عکس پروفایل ${artist.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
          priority
        />
      </div>

      {/* اطلاعات */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center text-center md:text-right">

        {/* نام آرتیست + بج سابقه */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">

          {/* نام + تخصص + بج سابقه */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-green-dark">
                {artist.name}
              </h1>

              {artist.experience && (
                <div className="bg-brand-gold/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-green-dark shadow-sm flex items-center gap-1 mt-3">
                  <FaHistory className="text-brand-gold" />
                  <span>{artist.experience} تجربه</span>
                </div>
              )}
            </div>

            <p className="text-lg text-brand-pink font-semibold mt-1">
              {artist.specialty}
            </p>
          </div>

          {/* امتیاز */}
          <div className="flex items-center gap-1 bg-brand-gold/10 px-4 py-2 rounded-xl">
            <FaStar className="text-brand-gold text-xl" />
            <span className="text-xl font-bold text-brand-green-dark">
              {artist.rating}
            </span>
            <span className="text-sm text-gray-500">/5</span>
          </div>
        </div>

        {/* بیوگرافی */}
        <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl text-justify md:text-right">
          {artist.bio}
        </p>

        {/* دکمه‌ها */}
        <div className="flex flex-col sm:flex-row gap-6 mt-auto justify-center md:justify-start">

          <Link
            href={`/booking?artist=${artist.slug}`}
            className="w-full sm:w-auto px-4 py-2 text-sm bg-brand-pink hover:bg-brand-pink-dark text-white rounded-xl font-bold transition-all shadow-md hover:shadow-brand-pink/30"
          >
            <div className="flex items-center justify-center gap-2">
              <FaCalendarCheck className="text-base" />
              رزرو نوبت
            </div>
          </Link>

          <button
            disabled
            className="w-full sm:w-auto px-4 py-2 text-sm border-2 border-brand-green text-brand-green rounded-xl opacity-50 cursor-not-allowed font-bold"
          >
            مشاهده نظرات
          </button>

        </div>
      </div>
    </article>
  );
}
