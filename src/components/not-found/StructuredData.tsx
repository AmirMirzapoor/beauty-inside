export default function StructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'صفحه‌ای پیدا نشد - سالن زیبایی اینساید',
      description:
        'صفحه‌ای که دنبال آن بودید پیدا نشد. اینجا را ببینید یا به صفحه اصلی برگردید.',
      url: 'https://yourdomain.com/404',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'خانه',
            item: 'https://yourdomain.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'خطای ۴۰۴',
            item: 'https://yourdomain.com/404',
          },
        ],
      },
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'چرا این خطا را می‌بینم؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'آدرس وارد شده اشتباه است یا صفحه حذف شده است.',
            },
          },
          {
            '@type': 'Question',
            name: 'چگونه به صفحه درست برسم؟',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'از منوی اصلی یا لینک‌های پیشنهادی در این صفحه استفاده کنید.',
            },
          },
        ],
      },
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    );
  }