"use client";

import Image from "next/image";
import SearchBox from "../shared/common/UI/searchbox";
import Link from "next/link";

export default async function Header() {

  return <header className="bg-black">
    <div className="container m-auto py-4">
      <div className="flex justify-between border-b borer-gray-500 pb-3 flex-wrap">
        <div className="w-full md:w-auto flex gap-x-5 gap-y-3 text-white uppercase flex-wrap">
          <div className="w-full md:w-auto">
            <Link href="/">
              <Image alt="logo" src="/images/logo.webp" width={100} height={50}></Image>
            </Link>
          </div>
          <Link className="font-bold text-md" href="/shop">Shop</Link>
          <Link className="font-bold text-md" href="/deals">Deals</Link>
          <Link className="font-bold text-md" href="/shop">Rewards</Link>
        </div>
        <SearchBox
          placeholder="Search everything at PARC Cannabis"
          />
      </div>
      <div className="mt-3">
        <p className="text-md text-gray-200 font-bold">PARC Alphena - 1105W Chisholm</p>
        <p className="text-md text-gray-300">Closes at 9 pm today</p>
      </div>
    </div>
  </header>;
}