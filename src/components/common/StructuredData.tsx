import { SITE_CONFIG } from "../../lib/constants";

// تعریف تایپ‌های دقیق برای جلوگیری از خطای no-explicit-any
type SchemaType = "Organization" | "LocalBusiness" | "Service" | "Article" | "Breadcrumb";

interface ServiceData {
  title: string;
  description: string;
  price: string | number;
}

interface StructuredDataProps {
  type: SchemaType;
  data?: ServiceData; // استفاده از تایپ دقیق به جای any
  breadcrumbs?: { name: string; item: string }[];
}

export default function StructuredData({ type, data, breadcrumbs }: StructuredDataProps) {
  // استفاده از Record<string, unknown> به جای any برای آبجکت‌هایی که ساختار دینامیک دارند
  let schema: Record<string, unknown> = {};

  switch (type) {
    case "LocalBusiness":
      // حیاتی برای GEO (جستجوی محلی و مپس)
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
      // بررسی می‌کنیم که دیتا وجود داشته باشد
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