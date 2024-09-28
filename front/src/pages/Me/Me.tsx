import { Flex } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from "./styles.module.css";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

export const Me: FC = () => {
  return (
    <Content className={styles.wrapper}>
      <Flex vertical align="center" justify="stretch">
        <CustomSkeleton height={"150px"} width={"100%"} />
        <Flex vertical className={styles.container} gap="10px">
          <MenuItem path="/adress" name="Адрес" />
          <MenuItem path="/settings" name="Настройки" />
          <MenuItem path="/settings" name="Что-то ещё" />
        </Flex>
      </Flex>
    </Content>
  );
};
