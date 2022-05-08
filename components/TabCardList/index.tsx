import { CapsuleTabs } from "antd-mobile";
import CardList from "./CardList";
import styles from "./index.module.scss";

interface TabCardListProps {}

const TabCardList = ({}: TabCardListProps) => {
  return (
    <CapsuleTabs className={styles.container} defaultActiveKey="1">
      <CapsuleTabs.Tab title="全部平台" key="1">
        <CardList />
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="有二级" key="2">
        2
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="有转赠" key="3">
        3
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="无二级无转赠" key="4">
        4
      </CapsuleTabs.Tab>
      <CapsuleTabs.Tab title="APP" key="5">
        5
      </CapsuleTabs.Tab>
    </CapsuleTabs>
  );
};

export default TabCardList;
