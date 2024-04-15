import Script from "next/script";
import { Product, WithContext } from "schema-dts";
import { ProductType } from "@src/lib/types/product";
import { useMemo } from "react";

export default function GenerateProductSchema({ product }: { product: ProductType }) {
  console.log(product)

  const jsonLd: WithContext<Product> = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: product.brand?.name
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      itemCondition: "NewCondition",
      price: product.variants[0].priceMed,
      priceCurrency: "USD",
      url: "https://pre-roll-admin-git-main-build-green-earths-projects.vercel.app/shop/product/"+product.slug
    },
    description: product.description
  }), [product]);

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}