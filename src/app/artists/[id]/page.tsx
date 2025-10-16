import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ArtistProfilePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ArtistProfilePageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `پروفایل هنرمند ${id}`,
    description: `صفحه پروفایل هنرمند با شناسه ${id}`,
  };
}

export default async function ArtistProfilePage({
  params,
}: ArtistProfilePageProps) {
  const { id } = await params;

  return (
    <div className="bg-background-light">
      <Header />
      <main className="pt-24 min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-brand-green-dark">
            صفحه پروفایل هنرمند
          </h1>
          <p className="text-lg mt-4 text-gray-600">
            این صفحه برای هنرمند با شناسه زیر است:
          </p>
          <p className="mt-2 text-2xl font-bold text-accent-pink bg-background-section p-4 rounded-lg inline-block">
            {id}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
