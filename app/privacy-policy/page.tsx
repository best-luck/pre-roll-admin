import PublicLayout from "@src/components/layout/publicLayout";
import { getSetting } from "@src/lib/database/settings";
import "@src/styles/pages/privacy.scss";

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Parc Cannabis Privacy Policy'
};

export default async function Page() {
  const content = await getSetting("privacy");

  return (
    <PublicLayout>
      <div className="container m-auto py-10 text-lg" dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </PublicLayout>
  )
}