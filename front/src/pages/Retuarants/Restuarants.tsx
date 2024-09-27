import { useState } from "react";
import Title from "antd/es/typography/Title";
import { NavBar } from "@features/NavBar/NavBar";
import { Content } from "antd/es/layout/layout";
import styles from "./styles.module.css";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Flex, Switch } from "antd";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

export const Restuarants = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <NavBar />
      <Content className={styles.content}>
        <Flex justify="space-between">
          {isLoading ? (
            <CustomSkeleton height={"30px"} width={"60%"} />
          ) : (
            <Title level={2}>Рестораны</Title>
          )}
          <Switch value={isLoading} onClick={() => setIsLoading(!isLoading)} />
        </Flex>

        <RestuarantsList isLoading={isLoading} />
      </Content>
    </>
  );
};
