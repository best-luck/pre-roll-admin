import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SPECIAL_IMAGE_HOST } from "@src/lib/static/vars";
import { SpecialType } from "@src/lib/types/specials";
import Image from "next/image";
import Link from "next/link";

export default function Special({special, type}: {special: SpecialType, type?: string}) {
  return (
    <div className={`${type==="view"?"w-full":"specials-grid"}`}>
      <div className={`flex justify-center items-center flex-col bg-cover bg-no-repeat bg-center rounded-[20px] p-5 text-white h-[200px]`} style={{backgroundImage: `linear-gradient(90deg, rgba(11, 31, 50, 0.38) 0%, rgb(11, 31, 50) 100%), url(${special.menuDisplayConfiguration.image||"https://dutchie.com/images/default-special-card.jpg"})`}}>
        {
        type==="view" ?
          <>
            <p className="text-xl font-bold">{special.menuDisplayConfiguration.name}</p>
            <p className="text-md mt-5">{special.menuDisplayConfiguration.description}</p>
          </> :
          <>
            <p className="text-md font-bold">{special.menuDisplayConfiguration.name}</p>
            <Link href={`/deals/${special.id}`} className="mt-5">
              <span className="text-sm">Shop Now</span> <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </>
        }
      </div>
    </div>
  )
}