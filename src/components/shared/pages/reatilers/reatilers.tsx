import { RetailerType } from "../../../../lib/types/retailers"
import Retailer from "./retailer/retailer"

export default function Retailers({
  retailers
}: {
  retailers: RetailerType[]
}) {
  return (
    <div>
      {
        retailers.map((retailer: RetailerType) => <Retailer key={'retailer-'+retailer.id} retailer={retailer} /> )
      }
    </div>
  )
}