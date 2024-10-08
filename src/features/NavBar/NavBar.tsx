import { Header } from "antd/es/layout/layout";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import Headroom from "react-headroom";

export const NavBar = () => {
  return (
    <>
      <Headroom>
        <Header className={styles.container}>
          <Flex className={styles.content} justify="center" align="center">
            <Title level={3}>EKEE</Title>
            <Title level={3} style={{ color: "#C23B22" }}>
              R
            </Title>
          </Flex>
        </Header>
      </Headroom>
    </>
  );
};
