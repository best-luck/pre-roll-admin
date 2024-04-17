import 'src/styles/globals.css';
import 'src/styles/fontawesome.css';
import '@src/styles/ReactToastify.min.css';
import LocalSchema from './localSchema';
import Script from 'next/script';

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
    <html lang="en" className="min-h-full">
      <head>
        <LocalSchema />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-D2SV29S9P4"></Script>
          <Script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D2SV29S9P4');`}
          </Script>
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
