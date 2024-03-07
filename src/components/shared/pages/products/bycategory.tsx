import { ProductType } from "../../../../lib/types/product";
import ProductsSlier from "./group/slider";

export default function ProductsByCategory({ products, category, selectProduct }: { products: ProductType[], category: string, selectProduct: (p: ProductType) => void; }) {
  return (
    <div className="py-[32px]">
      <h1 className="text-3xl font-bold mb-3 uppercase">{category}</h1>
      <ProductsSlier products={products} selectProduct={selectProduct} />
      <div className="border-1 border-b border-gray-300 mt-5"></div>
    </div>
  );
}
