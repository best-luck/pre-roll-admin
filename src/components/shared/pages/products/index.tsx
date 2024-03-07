'use client';

import { useEffect, useMemo, useState } from "react";
import { CategorizedProductsType, ProductType } from "../../../../lib/types/product";
import ProductsByCategory from "./bycategory";
import ProductPurchaseModal from "../../common/UI/modals/ProductPurchaseModal";

export default function CategorizedProducts(props: { products: ProductType[], categories: string[] }) {

  const categories = props.categories;
  const categorizedProducts: CategorizedProductsType = useMemo(() => {
    let products: CategorizedProductsType = {};
    props.products.forEach(product => {
      if (!products[product.category])
        products[product.category] = [];
        products[product.category].push(product);
    });
    return products;
  }, [props.products, categories]);
  const [isPurchaseModalVisible, setIsPurchaseModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType|null>(null);

  useEffect(() => {
    if (selectedProduct)
      setIsPurchaseModalVisible(true);
  }, [selectedProduct]);

  useEffect(() => {
    if (!isPurchaseModalVisible)
      setSelectedProduct(null);
  }, [isPurchaseModalVisible]);

  return (
    <div className="mt-3">
      {
        categories.map(category => (
          <ProductsByCategory 
            key={`products-by-category-${category}`}
            category={category}
            products={categorizedProducts[category]}
            selectProduct={setSelectedProduct} />
        ))
      }
      <ProductPurchaseModal
        product={selectedProduct}
        show={isPurchaseModalVisible}
        hideModal={() => setIsPurchaseModalVisible(false)}
        />
    </div>
  );
}
