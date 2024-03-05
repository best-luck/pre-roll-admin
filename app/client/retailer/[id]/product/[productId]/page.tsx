import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "@src/components/shared/common/UI/select";
import Variants from "@src/components/shared/common/UI/variants";
import ProductMain from "@src/components/shared/pages/products/details/ProductMain";
import { getRetailerProduct } from "@src/lib/dutchie/products";
import { SELECT_OPTION_TYPE } from "@src/lib/types/general";
import Image from "next/image";

export async function generateMetadata({ params: { id, productId } }: { params: { id: string, productId: string } }) {
  
  const product = await getRetailerProduct(id, productId);

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function Page({ params: { id, productId } }: { params: { id: string, productId: string } }) {

  const product = await getRetailerProduct(id, productId);

  return (
    <div className="container py-5 m-auto">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 pt-5">
          <Image
            src={product.image}
            width="200"
            height="100"
            alt="image"
            layout="responsive"
            />
        </div>
        <div className="col-span-8">
          <ProductMain
            product={product}
            />
          <div className="mt-10 text-gray-600">
            <span className="bg-gray-300 rounded-full px-5 py-3 text-sm font-bold">
              {product.strainType}
            </span>
            <span className="bg-gray-300 rounded-full px-5 py-3 text-sm font-bold mx-3">
              THC: {product.potencyThc.formatted}
            </span>
            <span className="bg-gray-300 rounded-full px-5 py-3 text-sm font-bold">
              CBD: {product.potencyCbd.formatted}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}