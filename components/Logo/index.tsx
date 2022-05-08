import styles from "./index.module.scss";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  return <span className={styles.container}>Web321</span>;
};

export default Logo;
