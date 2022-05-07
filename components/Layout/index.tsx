import Footer from "./Footer";
import Navbar from "./Navbar";
import { ReactNode } from "react";
import styles from "./index.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
