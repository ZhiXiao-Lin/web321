import { AutoCenter, Space } from "antd-mobile";

import Logo from "@/components/Logo";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Space block>
          <Logo />
        </Space>
        <AutoCenter className={styles.info}>
          本站大部分资源收集于网络，只做学习和交流使用，版权归原作者所有。本站发布的内容若侵犯到您的权益，请联系站长删除，我们将及时处理。
        </AutoCenter>
      </div>
      <Space justify="center" align="center" block>
        <span className={styles.copyright}>
          浙ICP备2022008888号 | ©{new Date().getFullYear()} Web321 版权所有
        </span>
      </Space>
    </div>
  );
};

export default Footer;
