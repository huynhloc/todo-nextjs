/* _app.js */
import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { SellerLayout } from "components";
import "styles/styles.scss";

const IntrepidApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
          key="viewport"
        />
      </Head>
      <SellerLayout>
        <Component {...pageProps} />
      </SellerLayout>
    </>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// IntrepidApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   // add this line in the header import App from 'next/app'
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default IntrepidApp;
