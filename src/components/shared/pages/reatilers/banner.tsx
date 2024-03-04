import { RetailerType } from "../../../../lib/types/retailers"

export default function RetailerBanner({
  retailer
}: {
  retailer: RetailerType
}) {
  return (
    <div>
      <h1 className="text-xl">{retailer.name}</h1>
    </div>
  )
}