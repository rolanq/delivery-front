import { Footer as FooterAnt } from "antd/es/layout/layout";
import React, { FC } from "react";
import styles from "./styles.module.css";
import { Flex, Typography } from "antd";
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface IPropsItem {
  children: React.ReactNode;
}

const FooterItem: FC<IPropsItem> = ({ children }) => {
  return (
    <Flex vertical gap="5px" align="center" className={styles.menuItem}>
      {children}
    </Flex>
  );
};

export const Footer: FC = () => {
  const menuItems = [
    <>
      <AppstoreOutlined />
      <Typography>Рестораны</Typography>
    </>,
    <>
      <ShoppingCartOutlined />
      <Typography>Корзина</Typography>
    </>,
    <>
      <UserOutlined />
      <Typography>Я</Typography>
    </>,
  ];
  return (
    <FooterAnt className={styles.wrapper}>
      <Flex className={styles.container}>
        {menuItems.map((item) => (
          <FooterItem>{item}</FooterItem>
        ))}
      </Flex>
    </FooterAnt>
  );
};
