import { ReactElement } from "react";
import RootLayout from "./layout";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const renderWithLayout =
    Component.getLayout ||
    function (page: ReactElement) {
      return <RootLayout>{page}</RootLayout>;
    };
  console.log(renderWithLayout);

  return renderWithLayout(<Component {...pageProps} />);
}