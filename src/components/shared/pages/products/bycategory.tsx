import { ProductType } from "../../../../lib/types/product";
import ProductsSlier from "./group/slider";

export default function ProductsByCategory({ products, category, selectProduct }: { products: ProductType[], category: string, selectProduct: (p: ProductType) => void; }) {
  return (
    <div className="py-[32px]">
      <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold mb-3 uppercase">{category}</h2>
      <ProductsSlier products={products} selectProduct={selectProduct} />
      <div className="border-1 border-b border-gray-300 mt-5"></div>
    </div>
  );
}
