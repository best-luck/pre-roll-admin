import { ProductDisplayType, ProductType } from "../../../../../lib/types/product";
import ProductCart from "./cart";
import ProductShow from "./show";

export default function Product({ display, product }: { display: ProductDisplayType, product: ProductType }) {
  return (
    display==="Cart" ?
      <ProductCart product={product} /> :
      <ProductShow product={product} />
  );
}
