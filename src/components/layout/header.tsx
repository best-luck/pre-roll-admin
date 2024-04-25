"use client";

import Image from "next/image";
import SearchBox from "../shared/common/UI/searchbox";
import Link from "next/link";
import CartButton from "../shared/common/UI/cart/CartButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../shared/common/UI/menu/sidebar";
import { useState } from "react";

export default function Header() {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return <>
    <header className="bg-black sticky top-0 w-full z-30">
      <div className="container m-auto">
        <div className="header-main flex justify-between border-b py-5 gap-3">
          <div className="logo-area flex gap-x-5 gap-y-3 text-white uppercase flex-wrap">
            <div className="flex-auto flex items-center">
              <span className="lg:hidden mr-3 lg:mr-0 cursor-pointer" onClick={() => setIsSidebarVisible(true)}>
                <FontAwesomeIcon icon={faBars} fontSize={30} />
              </span>
              <Link href="/">
                <Image alt="logo" src="/images/logo.webp" width={100} height={50}></Image>
              </Link>
            </div>
            <div className="hidden lg:flex flex-auto gap-x-4">
              <Link className="font-bold text-lg" href="/">Shop</Link>
              <Link className="font-bold text-lg" href="/deals">Deals</Link>
              <Link className="font-bold text-lg" href="/blog">Blogs</Link>
            </div>
          </div>
          <div className="flex gap-2 lg:gap-4 items-center">
            <SearchBox
              placeholder="Search everything at PARC Cannabis"
              />
            <CartButton />
          </div>
        </div>
        <div className="py-5">
          <p className="text-md text-gray-200 font-bold">PARC Alphena - 1105W Chisholm</p>
          <p className="text-md text-gray-300">Closes at 9 pm today</p>
        </div>
      </div>
    </header>
    {
      isSidebarVisible &&
        <Sidebar
          hide={() => setIsSidebarVisible(false)}
        />
    }
  </>;
}