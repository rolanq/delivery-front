import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from './styles.module.css'

export const Me: FC = () => {
  return (
    <Content className={styles.wrapper}>
      <Flex vertical>
        <MenuItem path="/adress" name="Адрес" />
        <MenuItem path="/settings" name="Настройки" />
        <MenuItem path="/settings" name="Что-то ещё" />
      </Flex>
    </Content>
  );
};
