import 'src/styles/globals.css';
import 'src/styles/fontawesome.css';
import '@src/styles/ReactToastify.min.css';

export const metadata = {
  title: 'Parc Cannabis',
  description:
    'Parc Cannabis Dispensary'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
