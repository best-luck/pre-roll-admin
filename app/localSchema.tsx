import Script from "next/script";
import { Store, WithContext } from "schema-dts";
import { useMemo } from "react";

export default function LocalSchema() {
  const jsonLd: WithContext<Store> = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Store",
    "url": "https://pre-roll-admin-git-main-build-green-earths-projects.vercel.app/",
    "name": "Parc Cannabis",
    "logo": "https://pre-roll-admin-git-main-build-green-earths-projects.vercel.app/_next/image?url=%2Fimages%2Flogo.webp&w=128&q=75",
    "image": "https://pre-roll-admin-git-main-build-green-earths-projects.vercel.app/_next/image?url=%2Fimages%2Flogo.webp&w=128&q=75",
    "description": "Welcome to Parc Cannabis, Alpeno, Michigan's premier recreational dispensary. Discover our diverse range of high-quality products, including THC gummies, THC oil, edibles, and pre-rolls. Our knowledgeable staff is dedicated to guiiding you through out offerings, ensuring an enjoyable and informative experience for every customer. Our modern facility creates a comfortable and inviting atmosphere, making your shopping experience seamless and enjoyable. As a trusted provider in the Alpena community, Parc Cannabis upholds the highest quality, service, and customer satisfactino standards. Visit Parc Cannabis today and elevate your marijuana dispensary journey.",
    "telephone": "+1 989-340-0374",
    "openingHours": "Mo-Su 09:00-21:00",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "addresslocality": "Alpena",
      "addressRange": "MI",
      "postalCode": "49709",
      "streetAddress": "1105 West Chisholm Street",
      "addressCountry": "USA"
    },
    "sameAs": [

    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "329"
    }
  }), []);

  return (
    <Script
      id="local-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}