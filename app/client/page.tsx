import { getRetailerDetails, getRetailers } from "@src/lib/dutchie/retailers";
import Retailers from "@src/components/shared/pages/reatilers/reatilers";
import Head from "next/head";

export const metadata = {
  title: 'Parc Cannabis',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  const retailers = await getRetailers();
  const retailerDetails = await Promise.all(retailers.map(async (reatiler: { id: string; }) => await getRetailerDetails(reatiler.id)))

  return (
    <main className="py-5">
      <Head>
        <title>Parc Cannabis</title>
      </Head>
      <div className="container m-auto relative">
        <Retailers retailers={retailerDetails} />
      </div>
    </main>
  );
}