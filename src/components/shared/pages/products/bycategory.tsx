import { ProductType } from "../../../../lib/types/product";
import ProductsSlier from "./group/slider";

export default function ProductsByCategory({ products, category }: { products: ProductType[], category: string }) {
  return (
    <div className="py-[32px]">
      <h1 className="text-3xl font-bold mb-3">{category}</h1>
      <ProductsSlier products={products} />
      <div className="border-1 border-b border-gray-300 mt-5"></div>
    </div>
  );
}
