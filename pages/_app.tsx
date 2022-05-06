import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ConfigProvider } from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";

function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={zhCN}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default App;
