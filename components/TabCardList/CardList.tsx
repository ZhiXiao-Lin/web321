import CardListItem from "./CardListItem";
import { Grid } from "antd-mobile";
import styles from "./CardList.module.scss";

const CardList = () => {
  return (
    <Grid columns={2} gap={[18, 12]}>
      <CardListItem />
      <CardListItem />
      <CardListItem />
      <CardListItem />
    </Grid>
  );
};

export default CardList;
