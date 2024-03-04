import Banner from '@src/components/layout/banner';
import Footer from '@src/components/layout/footer';
import Header from '@src/components/layout/header';
import 'src/styles/globals.css';
import 'src/styles/fontawesome.css';

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <body className="h-full">
      <Header />
      <Banner />
      {children}
      <Footer />
    </body>
  );
}
