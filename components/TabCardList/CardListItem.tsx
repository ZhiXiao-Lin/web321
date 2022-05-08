import { Ellipsis, Grid, Image, Space } from "antd-mobile";

import styles from "./CardListItem.module.scss";

export interface CardListItemProps {
  id: number;
  logo: string;
  name: string;
  desc: string;
  url: string;
  type: string;
  tags?: string[];
}

const CardListItem = ({ logo, name, desc, url }: CardListItemProps) => {
  return (
    <Grid.Item onClick={() => window.open(url, "_blank")}>
      <div className={styles.item}>
        <Image
          src={logo}
          width={32}
          height={32}
          lazy
          fit="cover"
          style={{ borderRadius: 4 }}
        />
        <Space
          direction="vertical"
          className={styles.content}
          style={{
            "--gap-vertical": "4px",
          }}
        >
          <strong className={styles.title}>
            <Ellipsis direction="end" content={name} />
          </strong>
          {desc && (
            <span className={styles.subtitle}>
              <Ellipsis direction="end" content={desc} />
            </span>
          )}
        </Space>
      </div>
    </Grid.Item>
  );
};

export default CardListItem;
