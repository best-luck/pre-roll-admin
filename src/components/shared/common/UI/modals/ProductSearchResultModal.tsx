import { stringSearchProducts } from "@src/lib/dutchie/products";
import { ProductType } from "@src/lib/types/product";
import { useEffect, useRef, useState } from "react";
import Product from "@src/components/shared/pages/products/product";

interface Props {
  query: string;
  show: boolean;
  hideModal: () => void;
}

export default function ProductSearchResultModal({ query, show, hideModal }: Props) {

  const [products, setProducts] = useState<ProductType[]>([]);
  const modalInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async() => {
      const _products = await stringSearchProducts(query);
      setProducts(_products.slice(0, 3));
    })();
  }, [query]);

  const outsideClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalInnerRef.current && !modalInnerRef?.current?.contains(event.target as Node)) {
      hideModal();
    }
  }

  return (
    show && <div
      onClick={outsideClickHandler}
      className={`w-screen h-screen fixed left-0 top-0 flex justify-center items-center`}
      style={{background: 'rgba(0, 0, 0, .9)', zIndex: 999}}>
      <div
        className="container m-auto py-10 bg-white"
        ref={modalInnerRef}>
        <h2 className="text-3xl mb-5">Search Result For: {query}</h2>
        <div className="flex gap-5 justify-between">
          {
            products.map((product, idx) => <Product display="Listing" product={product} key={`search-p-${idx}`} />)
          }
        </div>
      </div>
    </div>
  );
}