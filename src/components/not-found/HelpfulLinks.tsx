import Link from 'next/link';
import { getServices } from '@/lib/data';

export default function HelpfulLinks() {
  const services = getServices();

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-brand-green-dark mb-6">
        شاید این صفحات را بخواهید:
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* لینک‌های هوشمند */}
        <Link
          href="/services"
          className="block p-4 rounded-xl bg-white shadow hover:shadow-md transition-shadow"
        >
          <h3 className="font-semibold text-brand-pink">همه خدمات</h3>
          <p className="text-sm text-text-secondary mt-1">مشاهده لیست کامل خدمات</p>
        </Link>

        {services.slice(0, 5).map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="block p-4 rounded-xl bg-white shadow hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-brand-green-dark">{s.title}</h3>
            <p className="text-sm text-text-secondary mt-1">{s.description}</p>
          </Link>
        ))}
      </div>

      {/* سوالات متداول (AEO/GEO) */}
      <div className="mt-12 bg-brand-green-light/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-brand-green-dark mb-4">
          سوالات متداول
        </h3>
        <ul className="space-y-3 text-right">
          <li>
            <strong className="text-brand-pink">چرا این خطا را می‌بینم؟</strong>
            <br />
            <span className="text-text-secondary">
              آدرس وارد شده اشتباه است یا صفحه حذف شده.
            </span>
          </li>
          <li>
            <strong className="text-brand-pink">چگونه به صفحه درست برسم؟</strong>
            <br />
            <span className="text-text-secondary">
              از منوی بالا یا لینک‌های بالا استفاده کنید.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}