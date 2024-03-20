"use client";

import Image from "next/image";
import SearchBox from "../shared/common/UI/searchbox";
import Link from "next/link";

export default async function Header() {

  return <header className="bg-black">
    <div className="container m-auto">
      <div className="header-main flex justify-between border-b py-5 flex-wrap">
        <div className="w-full md:w-auto flex gap-x-5 gap-y-3 text-white uppercase flex-wrap">
          <div className="flex-auto">
            <Link href="/">
              <Image alt="logo" src="/images/logo.webp" width={100} height={50}></Image>
            </Link>
          </div>
          <div className="flex-auto flex gap-x-4 main-nav">
            <Link className="font-bold text-lg" href="/shop">Shop</Link>
            <Link className="font-bold text-lg" href="/deals">Deals</Link>
            <Link className="font-bold text-lg" href="/shop">Rewards</Link>
          </div>
        </div>
        <SearchBox
          placeholder="Search everything at PARC Cannabis"
          />
      </div>
      <div className="py-5">
        <p className="text-md text-gray-200 font-bold">PARC Alphena - 1105W Chisholm</p>
        <p className="text-md text-gray-300">Closes at 9 pm today</p>
      </div>
    </div>
  </header>;
}