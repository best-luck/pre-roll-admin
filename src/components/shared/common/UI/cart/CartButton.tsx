"use client";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import SidebarCart from "./SidebarCart";
import { useState } from "react";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  }

  return (
    <>
      {
        !showCart && <div className="cursor-pointer right-[100px] right-[20px]" onClick={toggleCart} style={{position: 'fixed', bottom: 100, zIndex: 999}} >
          <span className="bg-gray-400 rounded-full text-white shadow-lg p-3">
            <FontAwesomeIcon icon={faCartPlus} />
          </span>
        </div>
      }
      
      {
        showCart && <SidebarCart
          hide={toggleCart} />
      }
    </>
  );
}