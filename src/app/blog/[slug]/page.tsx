import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/data";
import StructuredData from "@/components/common/StructuredData";
import { FaCalendarAlt, FaClock, FaShareAlt } from "react-icons/fa";

// --- Static Params ---
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// --- Metadata ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return { title: "مقاله یافت نشد" };

  return {
    title: `${post.title} | مجله زیبایی`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      images: [post.coverImage],
      authors: [post.author],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const breadcrumbs = [
    { name: "خانه", item: "/" },
    { name: "بلاگ", item: "/blog" },
    { name: post.title, item: `/blog/${slug}` },
  ];

  return (
    <>
      <StructuredData type="Article" data={post} breadcrumbs={breadcrumbs} />
      <StructuredData type="Breadcrumb" breadcrumbs={breadcrumbs} />

      <main className="min-h-screen bg-background-light pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          
          {/* هدر مقاله */}
          <header className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 text-brand-pink font-bold text-sm mb-4">
              <span className="bg-brand-pink/10 px-3 py-1 rounded-full">{post.category}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-green-dark leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm border-b border-gray-200 pb-8 mx-auto max-w-2xl">
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock /> {post.readingTime} مطالعه
              </span>
              <span className="font-medium text-brand-green-dark">
                نویسنده: {post.author}
              </span>
            </div>
          </header>

          {/* تصویر اصلی */}
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* محتوای مقاله */}
          <div 
            className="prose prose-lg prose-headings:text-brand-green-dark prose-a:text-brand-pink hover:prose-a:text-brand-pink-dark prose-img:rounded-2xl max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* تگ‌ها و اشتراک‌گذاری */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 pt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-2 text-brand-pink font-bold hover:bg-brand-pink/5 px-4 py-2 rounded-xl transition-colors">
              <FaShareAlt /> اشتراک‌گذاری
            </button>
          </div>

        </article>
      </main>
    </>
  );
}