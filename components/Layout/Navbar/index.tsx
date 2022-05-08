import { NavBar as AdmNavBar } from "antd-mobile";
import { NavBarProps as AdmNavBarProps } from "antd-mobile/es/components/nav-bar";
import { IconMenu } from "@/components/iconfont";
import Logo from "@/components/Logo";
import styles from "./index.module.scss";

interface NavbarProps extends AdmNavBarProps {}

const Navbar = (props: NavbarProps) => {
  return (
    <AdmNavBar
      className={styles.container}
      back={null}
      // left={
      //   <div className={styles.menu}>
      //     <IconMenu size={1.5} />
      //   </div>
      // }
      {...props}
    >
      <Logo />
    </AdmNavBar>
  );
};

export default Navbar;
