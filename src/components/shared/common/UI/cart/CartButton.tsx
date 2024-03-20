"use client";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
        !showCart && <div className="cursor-pointer right-[100px] right-[20px]" onClick={toggleCart} style={{position: 'fixed', bottom: 100, zIndex: 999}} >
          <Image
              src="/images/cart.webp"
              alt="Add to cart"
              width={106}
              height={106}
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