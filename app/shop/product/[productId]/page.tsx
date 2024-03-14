import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@src/components/shared/common/UI/select";
import Variants from "@src/components/shared/common/UI/variants";
import ProductMain from "@src/components/shared/pages/products/details/ProductMain";
import ProductsSlier from "@src/components/shared/pages/products/group/slider";
import { filterRetailerProducts, getRetailerProduct } from "@src/lib/dutchie/products";
import { RETAILER_ID } from "@src/lib/static/vars";
import { SELECT_OPTION_TYPE } from "@src/lib/types/general";
import { ProductType } from "@src/lib/types/product";
import { Metadata } from "next";
import Image from "next/image";
import RelatedItems from "./related";
import BackButton from "@src/components/shared/common/UI/button/back";

export async function generateMetadata({ params: { productId } }: { params: { productId: string } }) {
  
  const id = RETAILER_ID;
  const product: ProductType = await getRetailerProduct(productId);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: product.images,
      title: product.name,
      description: product.description
    }
  }
}

export default async function Page({ params: { productId } }: { params: { productId: string } }) {

  const product = await getRetailerProduct(productId);
  const relatedItems = await filterRetailerProducts(product.category, [], [], [], [], [], "");

  return (
    <div className="container py-5 m-auto">
      <BackButton />
      <div className="grid grid-cols-12 gap-0 lg:gap-10 gap-y-10">
        <div className="col-span-12 lg:col-span-4 pt-5">
          <Image
            src={product.image}
            width={200}
            height={100}
            alt="image"
            layout="responsive"
            />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <ProductMain
            product={product}
            />
          <div className="mt-10 text-gray-600 pb-5 border-b border-gray-200">
            <div className="flex flex-wrap gap-y-3">
              <div className="bg-gray-300 rounded-full px-5 py-3 text-sm font-bold">
                {product.strainType}
              </div>
              <div className="bg-gray-300 rounded-full px-5 py-3 text-sm font-bold mx-3">
                THC: {product.potencyThc.formatted}
              </div>
              <div className="bg-gray-300 rounded-full px-5 py-3 text-sm font-bold">
                CBD: {product.potencyCbd.formatted}
              </div>
            </div>
            <div className="mt-10">
              { product.description }
            </div>
          </div>
        </div>
      </div>

      <RelatedItems products={relatedItems} />    
    </div>
  )
}