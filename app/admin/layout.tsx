import AdminHeader from "@src/components/layout/admin/sublayout/header";
import Footer from "@src/components/layout/footer";
import { ToastContainer } from "react-toastify";

export default async function AdminLayout({ children }: { children: React.ReactElement }) {

  return (
    <>
      <AdminHeader />
      {children}
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </>
  )
}