import Banner from '@src/components/layout/banner';
import Footer from '@src/components/layout/footer';
import Header from '@src/components/layout/header';
import 'src/styles/globals.css';
import 'src/styles/fontawesome.css';
import { ToastContainer } from 'react-toastify';
import AgeRestrictModal from '@src/components/shared/common/UI/modals/AgeRestrict';
import CartButton from '@src/components/shared/common/UI/cart/CartButton';
import DealsBanner from '@src/components/layout/dealsbanner';
import PublicLayout from '@src/components/layout/publicLayout';

export const metadata = {
  title: 'Parc Cannabis',
  description:
    'Parc Cannabis'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  );
}
