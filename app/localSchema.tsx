import Script from "next/script";
import { Store, WithContext } from "schema-dts";
import { getSetting } from "@src/lib/database/settings";

export default async function LocalSchema() {

  const localSchema = await getSetting("localSchema");

  const jsonLd: WithContext<Store> = JSON.parse(localSchema);

  return (
    <Script
      id="local-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd)
      }}
    />
  );
}