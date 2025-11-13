import ArtistInfoSkeleton from './ArtistInfoSkeleton';
import ServicePortfolioSkeleton from './ServicePortfolioSkeleton';

export default function ArtistProfileSkeleton() {
  return (
    <div className="bg-background-light min-h-screen pt-24">
      <div className="container mx-auto px-6 py-12 space-y-12">
        <ArtistInfoSkeleton />
        <div>
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-8"></div>
          <ServicePortfolioSkeleton itemCount={9} columns={3} />
        </div>
      </div>
    </div>
  );
}