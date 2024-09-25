import React from "react";
import Title from "antd/es/typography/Title";
import { NavBar } from "@features/NavBar/NavBar";
import { Content } from "antd/es/layout/layout";
import styles from "./styles.module.css";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Skeleton } from "antd";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

export const Restuarants = () => {
  const isLoading = false;
  return (
    <>
      <NavBar />
      <Content className={styles.content}>
        <Title level={2}>{isLoading ? <CustomSkeleton height={"30px"} /> : "Рестораны"}</Title>
        <RestuarantsList />
      </Content>
    </>
  );
};
