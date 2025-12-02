import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCalendarCheck, FaHistory } from "react-icons/fa"; // استفاده از آیکون‌های استاندارد
import type { Artist } from "@/components/common/types";

interface Props {
  artist: Artist;
}

export default function ArtistInfoCard({ artist }: Props) {
  return (
    <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
      {/* بخش تصویر */}
      <div className="relative w-full md:w-72 h-72 md:h-auto flex-shrink-0 bg-gray-100">
        <Image
          src={artist.profilePic}
          alt={`عکس پروفایل ${artist.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover"
          priority
        />
        {/* بج سابقه کار */}
        {artist.experience && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-green-dark shadow-sm flex items-center gap-1">
            <FaHistory className="text-brand-gold" />
            <span>{artist.experience} تجربه</span>
          </div>
        )}
      </div>
      
      {/* بخش اطلاعات */}
      <div className="flex-1 p-8 flex flex-col justify-center text-center md:text-right">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2">
              {artist.name}
            </h1>
            <p className="text-lg text-brand-pink font-semibold">
              {artist.specialty}
            </p>
          </div>
          
          {/* امتیاز */}
          <div className="flex items-center gap-1 bg-brand-gold/10 px-4 py-2 rounded-xl">
            <FaStar className="text-brand-gold text-xl" />
            <span className="text-xl font-bold text-brand-green-dark">{artist.rating}</span>
            <span className="text-sm text-gray-500">/5</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl text-justify md:text-right">
          {artist.bio}
        </p>

        {/* دکمه‌های عملیاتی */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <Link
            href={`/booking?artist=${artist.slug}`}
            className="flex-1 flex items-center justify-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white py-3 px-6 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-1"
          >
            <FaCalendarCheck className="text-lg" />
            رزرو نوبت با {artist.name}
          </Link>
          
          <button 
            disabled // فعلاً غیرفعال تا بعداً پیاده‌سازی شود
            className="flex-1 border-2 border-brand-green text-brand-green font-bold py-3 px-6 rounded-xl hover:bg-brand-green hover:text-white transition-all opacity-50 cursor-not-allowed"
          >
             مشاهده نظرات مشتریان
          </button>
        </div>
      </div>
    </article>
  );
}