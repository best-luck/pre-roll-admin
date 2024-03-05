import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartTotal from "@src/components/shared/common/UI/cart/CarTotal";
import CartTable from "@src/components/shared/pages/products/group/CartTable";
import { createCheckout, getCart } from "@src/lib/dutchie/checkout";
import { getSessionData } from "@src/lib/session/getSession";
import { CartType } from "@src/lib/types/checkout";

export const metadata = {
  title: "Parc Cannabis Checkout",
  description: "Parc Cannabis Checkout"
}

export default async function Page({ params: { id } }: { params: { id: string } }) {

  const session = await getSessionData();
  let checkout: CartType = await getCart(id, session[`checkoutid-${id}`]);
  if (!session[`checkoutid-${id}`]) {
    checkout = {
      items: [],
      priceSummary: {
        discounts: 0,
        fees: 0,
        total: 0,
        subtotal: 0,
        mixAndMatch: 0,
        rewards: 0,
        taxes: 0
      },
      orderType: '',
      pricingType: '',
      redirectUrl: '',
      createdAt: '',
      updatedAt: '',
    }
  }
  const { items } = checkout;

  return (
    <div className="container m-auto my-10">
      <div className="grid grid-cols-12">
        <div className="col-span-8 border-r pr-10">
          <h1 className="text-2xl font-bold mb-5">Shopping cart</h1>
          <CartTable items={items} />
        </div>
        <div className="col-span-4 pl-10">
          <h1 className="text-2xl font-bold mb-5">Cart totals</h1>
          <CartTotal summary={checkout.priceSummary} />
        </div>
      </div>
    </div>
  );
}