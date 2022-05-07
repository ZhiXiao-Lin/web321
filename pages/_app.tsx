import "@/styles/globals.scss";

import type { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import { ConfigProvider } from "antd-mobile";
import Layout from "@/components/Layout";
import type { NextPage } from "next";
import zhCN from "antd-mobile/es/locales/zh-CN";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <ConfigProvider locale={zhCN}>
      {getLayout(<Component {...pageProps} />)}
    </ConfigProvider>
  );
}

export default App;
