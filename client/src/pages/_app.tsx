import "styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid place-items-center bg-[#131332] w-screen h-screen  text-[#9de1d7]">
      <div>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </div>
  );
}

export default MyApp;
