import Banner from "@src/components/layout/banner";
import CartButton from "@src/components/shared/common/UI/cart/CartButton";
import CategorizedProducts from "@src/components/shared/pages/products";
import RetailerBanner from "@src/components/shared/pages/reatilers/banner";
import RetailerCategories from "@src/components/shared/pages/reatilers/category";
import getCategoryImages from "@src/lib/database/categoryImages";
import { getRetailerProducts } from "@src/lib/dutchie/products";
import { getRetailerDetails, getRetailerMenu } from "@src/lib/dutchie/retailers"
import { RETAILER_ID } from "@src/lib/static/vars";
import { ProductType } from "@src/lib/types/product";

export async function generateMetadata() {
  
  const id = RETAILER_ID;
  const retailer = await getRetailerDetails(id);
  const specials = await getRetailerMenu(id);

  return {
    title: retailer.name,
    description: retailer.description,
  }
}

export default async function Page() {

  const id = RETAILER_ID;
  const retailer = await getRetailerDetails(id);
  const products: ProductType[] = await getRetailerProducts(id);
  const categories = Array.from(new Set(products.map((product: ProductType) => product.category)));
  const images = await getCategoryImages();

  return (
    <>
      <Banner />
      <div className="container py-5 m-auto">
        <RetailerBanner retailer={retailer} />
        <RetailerCategories
          categories={categories}
          images={images}
          />
        <CategorizedProducts products={products} categories={categories} />
      </div>
    </>
  )
}