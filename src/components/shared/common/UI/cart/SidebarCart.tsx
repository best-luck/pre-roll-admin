import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import { faCaretLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import getCartItemsAction from "@src/lib/actions/cart";
import { CartProductType, CartType } from "@src/lib/types/checkout";
import CartItem from "@src/components/shared/pages/products/product/cartitem";
import { removeItemFromCart } from "@src/lib/actions/frontend/checkout";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DISPENSARY_ID } from "@src/lib/static/vars";

export default function SidebarCart({ show, hide }: { show: boolean, hide: () => void }) {

  const [cart, setCart] = useState<CartType|null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async() => {
      const data = await getCartItemsAction();
      setCart(data.cart);
    })()
  }, []);

  const removeItem = (itemId: string) => {
    setLoading(true);
    removeItemFromCart(itemId)
      .then(res => res.json())
      .then((resp) => {
        setLoading(false);
        toast.success('Item removed from cart!');
        setCart(resp.cart);
      })
      .catch(err => {
        setLoading(false);
      });
  }

  const proceedToCheckout = () => {
    router.replace(`https://checkout.northcannabisco.com/checkouts/${DISPENSARY_ID}/${cart?.id}`);
  }

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen flex flex-row-reverse z-40 ${show?"":"-translate-x-full"}`}>
      <div className={`flex flex-col w-[500px] h-screen shadow-xl overflow-y-auto bg-white dark:bg-gray-800`} tabIndex={-1} aria-labelledby="drawer-navigation-label">
        <div className="shadow-lg py-5 px-5 flex justify-between">
          <div>
            <p className="text-md font-bold">Shopping Cart</p>
            <p className="text-sm">Subtotal: ${((cart?.priceSummary?.subtotal||0) / 100).toFixed(2)}</p>
          </div>
          <Button onClick={hide} className="border-2 border-black" type="button">
            <FontAwesomeIcon icon={faClose} className="mr-3" />Close
          </Button>
        </div>
        <div className="flex-1 shadow-lg overflow-auto relative">
          <Link href="/shop" onClick={hide}>
            <div className="p-5 border-b border-gray-200 flex">
              <Image
                src="/images/dark-logo.webp"
                width="100"
                height="100"
                alt="Logo"
                />
              <div className="ml-3">
                <p className="text-gray-400 font-bold text-xs">SHOPPING AT:</p>
                <p className="text-gray-600 font-bold text-sm">Parc Cannabis</p>
              </div>
              <div className="flex-1 font-bold text-right">PICKUP</div>
            </div>
          </Link>
          <div className="p-5">
            {
              cart?.items?.map((item: CartProductType) => (
                <CartItem
                  item={item}
                  key={`cart-item-${item.id}`}
                  removeItem={removeItem} />
              ))
            }
          </div>
          <div className="absolute top-0 left-0">
            
          </div>
        </div>
        <div className="shadow-lg p-5">
          <Link href="/shop" className="font-bold">
            <FontAwesomeIcon icon={faCaretLeft} /> Continue Shopping
          </Link>
          <div className="flex mt-5">
            <div className="flex-1">
              <p className="text-md font-bold text-gray-600">Subtotal: ${((cart?.priceSummary?.subtotal||0) / 100).toFixed(2)}</p>
              <p className="text-sm">*Cannabis and Sales tax will be added at checkout.</p>
            </div>
            <div className="flex-1">
              <Button className="bg-gray-500 rounded-[50px] text-white w-full font-bold" type="button" onClick={proceedToCheckout}>Proceed to Checkout</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen" style={{background: "rgba(255, 255, 255, .7)"}} onClick={hide}></div>
    </div>
  )
}