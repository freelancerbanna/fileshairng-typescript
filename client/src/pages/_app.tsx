import "styles/globals.css";
import type { AppProps } from "next/app";

import { Header } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid place-items-center bg-[#636B78] w-screen h-screen">
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
