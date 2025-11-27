import { SITE_CONFIG } from "../../lib/constants";

type SchemaType = "Organization" | "LocalBusiness" | "Service" | "Article" | "Breadcrumb" | "WebPage";

// تعریف یک اینترفیس جامع برای تمام انواع داده‌ها
// تمام فیلدها اختیاری هستند تا بتوانیم هم آبجکت سرویس و هم مقاله را به آن پاس بدهیم
interface UnifiedData {
  title?: string;
  description?: string;
  price?: string | number;
  excerpt?: string;       // مخصوص مقاله
  coverImage?: string;    // مخصوص مقاله
  author?: string;        // مخصوص مقاله
  date?: string;          // مخصوص مقاله
  slug?: string;          // مخصوص مقاله
}

interface StructuredDataProps {
  type: SchemaType;
  data?: UnifiedData; // استفاده از تایپ مشخص به جای any
  breadcrumbs?: { name: string; item: string }[];
}

export default function StructuredData({ type, data, breadcrumbs }: StructuredDataProps) {
  let schema: Record<string, unknown> = {};

  switch (type) {
    case "LocalBusiness":
      schema = {
        "@context": "https://schema.org",
        "@type": "BeautySalon",
        "@id": `${SITE_CONFIG.url}/#localbusiness`,
        name: SITE_CONFIG.name,
        image: `${SITE_CONFIG.url}/images/salon-interior.jpg`,
        telephone: SITE_CONFIG.telephone,
        url: SITE_CONFIG.url,
        address: {
          "@type": "PostalAddress",
          ...SITE_CONFIG.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          ...SITE_CONFIG.geo,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "21:00",
        },
        sameAs: SITE_CONFIG.socials,
        priceRange: SITE_CONFIG.priceRange,
      };
      break;

    case "Service":
      if (data) {
        schema = {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: data.title,
          provider: {
            "@type": "BeautySalon",
            name: SITE_CONFIG.name,
          },
          areaServed: {
            "@type": "City",
            name: SITE_CONFIG.address.addressLocality,
          },
          description: data.description,
          offers: {
            "@type": "Offer",
            price: data.price,
            priceCurrency: "IRR",
          },
        };
      }
      break;

    case "Article":
      if (data) {
        schema = {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: data.title,
          description: data.excerpt || data.description, // فال‌بک به description
          image: data.coverImage ? [`${SITE_CONFIG.url}${data.coverImage}`] : undefined,
          author: {
            "@type": "Person",
            name: data.author || SITE_CONFIG.name,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_CONFIG.url}/logo.png`,
            },
          },
          datePublished: data.date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.url}/blog/${data.slug}`,
          },
        };
      }
      break;

    case "WebPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        description: SITE_CONFIG.description,
      };
      break;
      
    case "Breadcrumb":
       if (breadcrumbs) {
        schema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.item.startsWith("http") ? crumb.item : `${SITE_CONFIG.url}${crumb.item}`,
          })),
        };
       }
      break;

    default:
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}