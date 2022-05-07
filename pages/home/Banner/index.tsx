import { Swiper } from "antd-mobile";
import styles from "./index.module.scss";

interface BannerProps {}

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className={styles.item}
      style={{ background: color }}
      onClick={() => {}}
    >
      {index + 1}
    </div>
  </Swiper.Item>
));

const Banner = ({}: BannerProps) => {
  return (
    <div className={styles.container}>
      <Swiper
        autoplay
        loop
        style={{
          "--border-radius": "8px",
        }}
      >
        {items}
      </Swiper>
    </div>
  );
};

export default Banner;
