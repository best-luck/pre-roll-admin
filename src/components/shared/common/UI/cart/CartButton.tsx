"use client";

import SidebarCart from "./SidebarCart";
import { useState } from "react";
import Image from "next/image";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  }

  return (
    <>
      {
        !showCart && <div className="cursor-pointer flex items-center" onClick={toggleCart} >
          <Image
              src="/images/cart.webp"
              alt="Add to cart"
              width={40}
              height={40}
          />
        </div>
      }
      
      {
        showCart && <SidebarCart
          hide={toggleCart} />
      }
    </>
  );
}