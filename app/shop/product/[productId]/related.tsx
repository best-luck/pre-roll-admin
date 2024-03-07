"use client";

import ProductPurchaseModal from "@src/components/shared/common/UI/modals/ProductPurchaseModal";
import ProductsSlier from "@src/components/shared/pages/products/group/slider";
import { ProductType } from "@src/lib/types/product";
import { useEffect, useState } from "react";

export default function RelatedItems({ products }: { products: ProductType[] }) {

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
    <div className="mt-10 border-t border-gray-200 pt-5">
      <h2 className="text-2xl font-bold mb-5">Related Items</h2>
      <ProductsSlier
        products={products}
        selectProduct={setSelectedProduct}
        />
      <ProductPurchaseModal
        product={selectedProduct}
        show={isPurchaseModalVisible}
        hideModal={() => setIsPurchaseModalVisible(false)}
        />
    </div>
  )
}