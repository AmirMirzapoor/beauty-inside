import Image from 'next/image';
import type { Artist } from '@/components/common/types';

interface Props {
  artist: Artist;
}

export default function ArtistInfoCard({ artist }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-accent-pink/30">
        <Image
          src={artist.profilePic}
          alt={`عکس پروفایل ${artist.name}`}
          fill
          sizes="(max-width: 768px) 128px, 160px"
          className="object-cover"
          priority
        />
      </div>
      
      <div className="text-center md:text-right flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2">
          {artist.name}
        </h1>
        <p className="text-xl text-accent-pink font-semibold mb-3">
          {artist.specialty}
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed max-w-2xl">
          {artist.bio}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <div className="bg-brand-green-light/10 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">امتیاز: </span>
            <span className="font-bold text-brand-green-dark">{artist.rating}/5</span>
          </div>
          {artist.experience && (
            <div className="bg-brand-green-light/10 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-600">تجربه: </span>
              <span className="font-bold text-brand-green-dark">{artist.experience}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}