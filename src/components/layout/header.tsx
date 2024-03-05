import Image from "next/image";
import SearchBox from "../shared/common/UI/searchbox";
import Link from "next/link";

export default async function Header() {

  return <header className="bg-black">
    <div className="container m-auto py-4">
      <div className="flex justify-between border-b borer-gray-500 pb-3">
        <div className="flex gap-5 text-white uppercase">
          <Link href="/">
            <Image alt="logo" src="/images/logo.webp" width={100} height={50}></Image>
          </Link>
          <Link className="font-bold text-md" href="/client">Shop</Link>
          <Link className="font-bold text-md" href="/client">Deals</Link>
          <Link className="font-bold text-md" href="/client">Rewards</Link>
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