import Banner from "./home/Banner";
import TabCardList from "@/components/TabCardList";
import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <TabCardList />
      <TabCardList />
      <TabCardList />
    </div>
  );
};

export default Home;
