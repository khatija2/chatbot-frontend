import PageLayout from "@/components/pagelayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <PageLayout>
     <Toaster
       containerStyle={{
        top: 140,
        left: 40
      }}
      toastOptions={{
        style: {
          padding: '20px',
          borderRadius: '10px',
          gap: '6px'
        }}}/>
  <Component {...pageProps} />
  </PageLayout>
)
}
