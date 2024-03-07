import { RetailerType } from "../../../../../lib/types/retailers"

export default function Retailer({
  retailer
}: {
  retailer: RetailerType
}) {
  return (
    <div className="rounded-lg border p-3 mt-3">
      <a href={`/shop`}><p className="font-bold">{retailer.name}</p></a>
      <p>Location: {retailer.address}</p>
    </div>
  )
}