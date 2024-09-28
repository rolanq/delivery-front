import { Flex } from "antd";
import { FC } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from "./styles.module.css";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Page } from "@shared/kit/Page/Page";

export const Me: FC = () => {
  return (
    <Page paddingVertical scrollable={false}>
      <Flex vertical align="center" justify="stretch">
        <CustomSkeleton height={"150px"} width={"100%"} />
        <Flex vertical className={styles.container} gap="10px">
          <MenuItem path="/adress" name="Адрес" />
          <MenuItem path="/settings" name="Настройки" />
          <MenuItem path="/settings" name="Что-то ещё" />
        </Flex>
      </Flex>
    </Page>
  );
};
