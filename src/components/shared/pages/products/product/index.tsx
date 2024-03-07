import { ProductDisplayType, ProductType } from "../../../../../lib/types/product";
import ProductCart from "./cart";
import ProductListing from "./listing";
import ProductShow from "./show";

export default function Product({ display, product, selectProduct, isFetching }: { display: ProductDisplayType, product: ProductType, selectProduct?: (p: ProductType) => void, isFetching?: boolean }) {
  return (
    display==="Cart" ?
      <ProductCart product={product} selectProduct={selectProduct} /> :
      (display==="Listing" ?
        <ProductListing product={product} isFetching={isFetching} />  :
        <ProductShow product={product} />
      )
  );
}
