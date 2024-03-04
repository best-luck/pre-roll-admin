import AdminHeader from "@src/components/layout/admin/sublayout/header";
import Footer from "@src/components/layout/footer";

export default async function AdminLayout({ children }: { children: React.ReactElement }) {

  return (
    <>
      <AdminHeader />
      {children}
      <Footer />
    </>
  )
}