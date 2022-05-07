import styles from "./index.module.scss";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return <span className={styles.container}>LOGO</span>;
};

export default Logo;
