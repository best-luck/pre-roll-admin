import '@src/styles/globals.css';
import '@src/styles/fontawesome.css';
import PublicLayout from '@src/components/layout/publicLayout';

export const metadata = {
  title: 'Parc Cannabis',
  description:'Parc Cannabis'
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
