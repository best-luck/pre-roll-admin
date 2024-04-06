import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ hide }: { hide: () => void }) {

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen flex z-40 animate-in slide-in-from-left`}>
      <div className={`flex flex-col w-[400px] h-screen shadow-xl overflow-y-auto bg-white dark:bg-gray-800 text-black p-5`} tabIndex={-1} aria-labelledby="drawer-navigation-label">
        <div className="flex justify-end">
          <button onClick={hide}>
            <FontAwesomeIcon icon={faClose} fontSize={30} />
          </button>
        </div>
        <Link href="/shop" onClick={hide}>
          <div className="flex">
            <Image
              src="/images/dark-logo.webp"
              width="100"
              height="100"
              layout="responsive"
              alt="Logo"
              />
          </div>
        </Link>
        <Link className="font-bold text-lg mt-5" href="/shop">Shop</Link>
        <Link className="font-bold text-lg" href="/deals">Deals</Link>
        <Link className="font-bold text-lg" href="/shop">Rewards</Link>
      </div>
      <div className="flex-1 h-screen" style={{background: "rgba(255, 255, 255, .7)"}} onClick={hide}></div>
    </div>
  )
}