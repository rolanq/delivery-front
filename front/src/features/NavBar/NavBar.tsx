import { Header } from "antd/es/layout/layout";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";

export const NavBar = () => {
  return (
    <>
      <Header className={styles.container}>
        <Title level={3}>EKEE</Title>
        <Title level={3} style={{ color: "#C23B22" }}>
          R
        </Title>
      </Header>
    </>
  );
};
