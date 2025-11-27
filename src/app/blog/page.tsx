import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import SectionTitle from "@/components/common/Titles";
import StructuredData from "@/components/common/StructuredData";
import { FaClock, FaUser } from "react-icons/fa";

export const metadata: Metadata = {
  title: "مجله زیبایی و سلامت | سالن زیبای درون",
  description: "جدیدترین مقالات و نکات آموزشی در زمینه مراقبت از پوست، مو و زیبایی.",
};

export default function BlogPage() {
  return (
    <>
      <StructuredData type="WebPage" /> {/* می‌توانیم اسکیمای Blog بسازیم */}
      
      <main className="min-h-screen bg-background-light pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="مجله زیبایی" 
            subtitle="جدیدترین دانستنی‌ها و رازهای زیبایی برای شما" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
              >
                {/* تصویر مقاله */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-pink shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* محتوای متنی */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><FaClock className="text-brand-green" /> {post.readingTime}</span>
                    <span className="flex items-center gap-1"><FaUser className="text-brand-green" /> {post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-green-dark mb-3 line-clamp-2 group-hover:text-brand-pink transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-brand-green-dark font-semibold text-sm hover:text-brand-pink transition-colors"
                  >
                    مطالعه کامل مقاله 
                    <span className="mr-2 text-xl">←</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}