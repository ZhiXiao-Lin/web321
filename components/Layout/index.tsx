import { FloatingBubble } from "antd-mobile";
import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import styles from "./index.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Web321 - 数字藏品聚合导航</title>
        <meta name="keywords" content="数藏导航,NFT导航" />
        <meta name="description" content="数字藏品聚合导航" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.container}>
        {children}
        <Footer />
      </main>
      {/* <FloatingBubble
        style={{
          "--initial-position-bottom": "24px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
        }}
      >
        11
      </FloatingBubble> */}
    </>
  );
};

export default Layout;
