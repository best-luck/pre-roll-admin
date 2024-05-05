import PublicLayout from "@src/components/layout/publicLayout";
import { getSetting } from "@src/lib/database/settings";
import "@src/styles/pages/privacy.scss";

export const metadata = {
  title: 'Terms Of Service',
  description:
    'Parc Cannabis Terms Of Service'
};

export default async function Page() {
  const content = await getSetting("terms");

  return (
    <PublicLayout>
      <div className="container m-auto py-10 text-lg" dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </PublicLayout>
  )
}