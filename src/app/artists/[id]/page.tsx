import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// This component receives the 'id' from the URL
export default function ArtistProfilePage({ params }: { params: { id: string } }) {
    return (
        <div className="bg-background-light">
            <Header />
            <main className="pt-24 min-h-screen">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-brand-green-dark">صفحه پروفایل هنرمند</h1>
                    <p className="text-lg mt-4">
                        این صفحه برای هنرمند با شناسه ID زیر است:
                    </p>
                    <p className="mt-2 text-2xl font-bold text-accent-pink bg-background-section p-4 rounded-lg inline-block">
                        {params.id}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
