"use client";

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartProductType } from "@src/lib/types/checkout";
import Image from "next/image";

import "./style.scss";
import { getRetailerId } from "@src/lib/functions/client/helper";
import { removeItemFromCart } from "@src/lib/actions/frontend/checkout";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function CartTable({ items }: { items: CartProductType[] }) {

  const retailerId = getRetailerId();
  const router = useRouter();
  const removeItem = (itemId: string) => {
    removeItemFromCart(retailerId, itemId)
      .then(() => {
        router.refresh();
        toast.success('Item removed from cart!');
      })
      .catch(err => {

      });
  }
  
  return (
    <table className="table-layout w-full">
      <thead>
        <tr className="border-y border-gray-200">
          <th></th>
          <th></th>
          <th><div className="my-3">Product</div></th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {
          items.map((item: CartProductType, index: number) => (
            <tr className="text-center border-b checkout-product" key={`cart-item-${index}`}>
              <td>
                <button onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </td>
              <td>
                <div className="flex justify-center">
                  <Image
                    alt="Product"
                    width={200}
                    height={100}
                    src={item.product.image}
                    />
                </div>
              </td>
              <td><span className="font-bold">{item.product.name}</span></td>
              <td>$ {item.product.variants[0].priceMed.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td><span className="font-bold">$ {(item.quantity * item.product.variants[0].priceMed).toFixed(2)}</span></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}