"use client";

import { getRetailerId } from "@src/lib/functions/client/helper";
import { RETAILER_ID } from "@src/lib/static/vars";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Category({
  category
}: {
  category: string
}) {

  const router = useRouter();
  const retailerId = RETAILER_ID;
  const viewCategory = () => {
    router.push(`/shop/category/${category}`)
  }

  return (
    <div className="rounded-[30px] shadow-lg p-5 flex flex-col justify-between align-center border-black w-[200px] cursor-pointer"
      onClick={viewCategory}>
      <Image
        src={`/images/categories/${category}.jfif`}
        width={150}
        height={50}
        alt="category"
        />
      <p className="text-center font-bold uppercase text-xs mt-3">{category}</p>
    </div>
  );
}