import { SpecialType } from "@src/lib/types/specials";
import Special from "./special";

export default function Specials({specials}: {specials: SpecialType[]}) {
  return (
    <div className="flex flex-wrap specials-wrapper">
      {
        specials.map(special => (
          <Special
            key={`special-${special.id}`}
            special={special}
            />   
        ))
      }
    </div>
  )
}