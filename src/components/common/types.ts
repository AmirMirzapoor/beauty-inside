export type NavLink = { href: string; label: string };

export interface Service {
  id: number;
  slug: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface Artist {
  id: number;
  slug: string;
  name: string;
  profilePic: string;
  specialty: string;
  bio: string;
  rating: number;
}

export interface PortfolioItem {
  id: number;
  image: string;
  serviceSlug: string;
  artistId: number;
  alt?: string;
}

export type EnrichedPortfolioItem = PortfolioItem & {
  artist?: Artist;
  service?: Service;
};

export interface GalleryImage {
  src: string;
  alt: string;
}

export type SocialLink = {
  href: string;
  icon: React.ReactNode;
  label: string;
};