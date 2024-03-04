import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartTotal from "@src/components/shared/common/UI/cart/CarTotal";
import CartTable from "@src/components/shared/pages/products/group/CartTable";
import { getCart } from "@src/lib/dutchie/checkout";
import { getSessionData } from "@src/lib/session/getSession";
import { CartType } from "@src/lib/types/checkout";

export default async function Page({ params: { id } }: { params: { id: string } }) {

  const session = await getSessionData();
  const checkout: CartType = await getCart(id, session[`checkoutid-${id}`]);
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