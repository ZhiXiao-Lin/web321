import { Grid } from "antd-mobile";
import styles from "./CardListItem.module.scss";

const CardListItem = () => {
  return (
    <Grid.Item>
      <div className={styles.item}>A</div>
    </Grid.Item>
  );
};

export default CardListItem;
