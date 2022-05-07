import Banner from "./home/Banner";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
};

export default Home;
