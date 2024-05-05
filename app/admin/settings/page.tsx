import getSettings from "@src/lib/database/settings";
import Form from "./form";

export default async function Page() {

  const settings = await getSettings();

  return (
    <div className="container m-auto py-10">
      <Form
        googleTags={settings.googleTags||""}
        localSchema={settings.localSchema||""}
        privacy={settings.privacy||""}
        terms={settings.terms||""}
      />
    </div>
  )
}