import { Layout, Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  isLoading: boolean;
}

export const GlobalLoader: FC<IProps> = ({ isLoading }) => {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isLoading]);

  return (
    <Content
      className={classNames(
        styles.wrapper,
        styles.block,
        isLoading ? styles.show : styles.hide
      )}
    >
      <Flex justify="center" align="center" className={styles.block}>
        <Title>Delivery</Title>
      </Flex>
    </Content>
  );
};
