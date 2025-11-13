export default function ArtistInfoSkeleton() {
    return (
      <article className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 animate-pulse">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-300"></div>
        <div className="text-center md:text-right flex-1 space-y-3">
          <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto md:mx-0"></div>
          <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto md:mx-0"></div>
          <div className="h-20 bg-gray-300 rounded w-full max-w-2xl mx-auto md:mx-0"></div>
          <div className="flex gap-4 justify-center md:justify-start">
            <div className="h-8 bg-gray-300 rounded w-24"></div>
            <div className="h-8 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      </article>
    );
  }