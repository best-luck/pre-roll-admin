import { ProductType } from "@src/lib/types/product";
import Product from "../product";

interface Props {
  products: ProductType[]
}

export default function List(props: Props) {
  return (
    <div className="flex flex-wrap gap-10">
      {
        props.products.map(product => (
          <Product
            display="Type"
            product={product}
            key={`product-list-${product.id}`} />
        ))
      }
    </div>
  );
}