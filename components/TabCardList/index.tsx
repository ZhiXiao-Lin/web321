import { CapsuleTabs } from "antd-mobile";
import CardList from "./CardList";
import { CardListItemProps } from "./CardListItem";
import styles from "./index.module.scss";
import { useReactive } from "ahooks";

export interface TabCardItemProps {
  title: string;
  type: string;
}

interface TabCardListProps {
  tabs: TabCardItemProps[];
  items: CardListItemProps[];
  type?: "platform" | "group";
}

const TabCardList = ({ type = "platform", tabs, items }: TabCardListProps) => {
  const state = useReactive<{ key: string }>({
    key: tabs[0]?.type,
  });

  return (
    <>
      <CapsuleTabs
        onChange={(key) => {
          state.key = key;
        }}
        className={styles.container}
        defaultActiveKey={tabs[0]?.type}
      >
        {tabs.map((tab) => (
          <CapsuleTabs.Tab title={tab.title} key={tab.type} />
        ))}
      </CapsuleTabs>
      {type === "platform" ? (
        <CardList
          items={items.filter((item) => {
            const tags = item.tags ?? [];
            if (state.key === "all") return true;
            // if (state.key === "no-transaction-no-gift") {
            //   return !tags.includes("transaction") && !tags.includes("gift");
            // }
            return tags.includes(state.key);
          })}
        />
      ) : (
        <CardList items={items.filter((item) => item.type === state.key)} />
      )}
    </>
  );
};

export default TabCardList;
