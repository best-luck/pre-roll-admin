'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function AgeRestrictComponent() {

  const router = useRouter();
  const confirmModal = () => {
    router.back();
  }

  return (
    <div className="rounded-lg bg-black text-white items-center flex flex-col py-3 w-11/12 md:w-9/12 lg:w-1/2 xl:w-1/2">
      <Image
        src="/images/logo.png"
        width={200}
        height={50}
        alt="Logo"
        />
      <h1 className="uppercase font-bold text-2xl md:text-4xl mt-3 text-center">Are you old enough to enjoy?</h1>
      <h3 className="text-xl text-center font-bold">Please verify that you are 21+ years old to enter.</h3>
      <div className="flex justify-center mt-3 font-bold gap-3">
        <button
          className="uppercase px-3 py-2 bg-slate-200	text-black rounded-lg"
          onClick={confirmModal}
        >
          I sure am
        </button>
        <button
          className="uppercase bg-transparent border rounded-lg px-3 py-2"
          onClick={confirmModal}
        >
          Not yet
        </button>
      </div>
    </div>
  );
}
