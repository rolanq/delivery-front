import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import { CustomHeader } from "@shared/kit/CustomHeader/CustomHeader";

export const Header = () => {
  return (
    <>
      <CustomHeader>
        <Flex className={styles.content} justify="center" align="center">
          <Title level={3}>EKEE</Title>
          <Title level={3} style={{ color: "#C23B22" }}>
            R
          </Title>
        </Flex>
      </CustomHeader>
    </>
  );
};
