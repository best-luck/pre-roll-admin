import CategorizedProducts from "@src/components/shared/pages/products";
import RetailerBanner from "@src/components/shared/pages/reatilers/banner";
import RetailerCategories from "@src/components/shared/pages/reatilers/category";
import { getRetailerProducts } from "@src/lib/dutchie/products";
import { getRetailerDetails } from "@src/lib/dutchie/retailers"
import { ProductType } from "@src/lib/types/product";

export const metadata = {
  title: 'Retailer Page',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function Page({ params: { id } }: { params: { id: string } }) {

  const retailer = await getRetailerDetails(id);
  const products: ProductType[] = await getRetailerProducts(id);
  const categories = Array.from(new Set(products.map((product: ProductType) => product.category)));

  return (
    <div className="container py-5 m-auto">
      <RetailerBanner retailer={retailer} />
      <RetailerCategories categories={categories} />
      <CategorizedProducts products={products} categories={categories} />
    </div>
  )
}