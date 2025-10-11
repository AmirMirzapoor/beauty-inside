import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// This component receives the 'slug' from the URL
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className="bg-background-light">
            <Header />
            <main className="pt-24 min-h-screen">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-brand-green-dark">صفحه جزئیات خدمات</h1>
                    <p className="text-lg mt-4">
                        این صفحه برای خدمت با شناسه URL زیر است:
                    </p>
                    <p className="mt-2 text-2xl font-bold text-accent-pink bg-background-section p-4 rounded-lg inline-block">
                        {params.slug}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
