import Footer from '@src/components/layout/footer';
import Header from '@src/components/layout/header';
import '@src/styles/globals.css';
import '@src/styles/fontawesome.css';
import { ToastContainer } from 'react-toastify';
import AgeRestrictModal from '@src/components/shared/common/UI/modals/AgeRestrict';

export const metadata = {
  title: 'Parc Cannabis',
  description:'Parc Cannabis'
};

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const res = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ7ZRdKTxdM00RtGUxk_0oG7g&fields=reviews&key=AIzaSyBc8DJimRdGuhXsE9wxpcxgxEgQhV7FrMA").then(res => res.json());
  const reviews = res.result.reviews;

  return (
    <>
      <Header />
      {children}
      <Footer
        reviews={reviews}
      />
      <AgeRestrictModal />
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
  );
}
