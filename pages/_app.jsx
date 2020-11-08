import React from "react";
import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/cs.json";

class SampleApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Just a simple shopify app</title>
          <meta charSet="utf-8"></meta>
        </Head>
        <AppProvider i18n={translations}>
          <Component {...pageProps}></Component>
        </AppProvider>
      </>
    );
  }
}

export default SampleApp;
