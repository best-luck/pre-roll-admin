"use client";

import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CartButton() {
  const pathname = usePathname();
  const retailerId: string = pathname?.split('/')[3]||'';
  return (
    <Link href={`/client/retailer/${retailerId}/checkout`} style={{position: 'fixed', bottom: 100, right: 100, zIndex: 999}}>
      <span className="bg-gray-400 rounded-full text-white shadow-lg p-3">
        <FontAwesomeIcon icon={faCartPlus} />
      </span>
    </Link>
  );
}