'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from "react";

interface Props {
  confirmModal: () => void;
}

export default function AgeRestrictComponent(props: Props) {

  const { confirmModal } = props;
  const [underAge, setUnderAge] = useState<boolean>(false);
  const agegateBG = {
    backgroundImage: 'url("/images/age-gate-bg.webp")',
  };

  return (
    <div className="rounded-lg bg-black text-white items-center flex flex-col py-10 w-11/12 md:w-9/12 lg:w-1/2 xl:w-1/2 agegate-wrapper" style={agegateBG}>
      <Image
        src="/images/logo.webp"
        width={200}
        height={50}
        alt="Parcannabis"
        />
      {
        !underAge ? <>
          <h2 className="uppercase font-bold mt-3 text-center agegate-title">Are you old enough to enjoy?</h2>
          <h3 className="text-center font-bold agegate-verifytext">Please verify that you are 21+ years old to enter.</h3>
          <div className="flex justify-center mt-3 font-bold gap-3">
            <button
              className="uppercase px-3 py-2 text-black rounded-lg btn-agegate-yes"
              onClick={confirmModal}
            >
              I sure am
            </button>
            <button
              className="uppercase bg-black border rounded-lg px-3 py-2 btn-agegate-no"
              onClick={() => setUnderAge(true)}
            >
              Not yet
            </button>
          </div>
        </> : <>
        <h1 className="uppercase font-bold text-2xl mx-3 md:text-xl mt-3 text-center">
          WE&rsquo;RE SORRY, WE TAKE SERIOUSLY OUR RESPONSIBILITY TO LIMIT WEBSITE ACCESS TO ADULTS 21 YEARS AND OLDER OR HAVE A MEDICAL CARD.
        </h1>
        <button
          className="uppercase bg-transparent border rounded-lg px-3 py-2 mt-3"
          onClick={() => setUnderAge(false)}
        >
          Back
        </button>
        </>
      }
    </div>
  );
}
