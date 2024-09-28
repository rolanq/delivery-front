import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import styles from "./styles.module.css";
import Title from "antd/es/typography/Title";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

export const Cart: FC = () => {
  const isLoading = true;
  return (
    <Content className={styles.wrapper}>
      <Title level={2}>Корзина</Title>
      <Flex justify="center" vertical>
        {isLoading && (
          <>
            <CustomSkeleton height={"150px"} width={"100%"} />
            <CustomSkeleton height={"150px"} width={"100%"} />
            <CustomSkeleton height={"150px"} width={"100%"} />
            <CustomSkeleton height={"150px"} width={"100%"} />
          </>
        )}
      </Flex>
    </Content>
  );
};
