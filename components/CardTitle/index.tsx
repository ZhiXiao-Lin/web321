import { IconCardTitle } from "@/components/iconfont";
import { Space } from "antd-mobile";
import styles from "./index.module.scss";

interface CardTitleProps {
  title: string;
}

const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <Space
      block
      align="center"
      style={{ "--gap": "6px" }}
      className={styles.container}
    >
      <IconCardTitle size={1.4} />
      <span className={styles.title}>{title}</span>
    </Space>
  );
};

export default CardTitle;
