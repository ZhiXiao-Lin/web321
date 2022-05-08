import CardListItem, { CardListItemProps } from "./CardListItem";

import { Grid } from "antd-mobile";

interface CardListProps {
  items: CardListItemProps[];
}

const CardList = ({ items }: CardListProps) => {
  return (
    <Grid columns={2} gap={[18, 16]}>
      {items.map((item, idx) => (
        <CardListItem key={item.id + idx} {...item} />
      ))}
    </Grid>
  );
};

export default CardList;
