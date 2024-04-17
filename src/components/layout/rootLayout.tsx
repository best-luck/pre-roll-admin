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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const res = await fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ7ZRdKTxdM00RtGUxk_0oG7g&fields=reviews&key=AIzaSyBc8DJimRdGuhXsE9wxpcxgxEgQhV7FrMA").then(res => res.json());
  const reviews = res.result.reviews;

  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Header />
        <Banner />
        {children}
        <Footer
          reviews={reviews}
        />
      </body>
    </html>
  );
}
