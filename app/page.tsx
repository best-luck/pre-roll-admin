import { getRetailerDetails, getRetailers } from "@src/lib/dutchie/retailers";
import Retailers from "@src/components/shared/pages/reatilers/reatilers";
import Head from "next/head";
import { redirect } from "next/navigation";

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
  redirect('/shop');
}