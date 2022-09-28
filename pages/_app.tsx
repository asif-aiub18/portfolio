import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Asif Anower</title>
      </Head>
      <div key={router.route} className="slot-view w-full">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
