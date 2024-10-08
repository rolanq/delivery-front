import { Flex } from "antd";
import { FC } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from "./styles.module.css";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Page } from "@shared/kit/Page/Page";
import classNames from "classnames";

export const Me: FC = () => {
  return (
    <Page paddingVertical scrollable={false}>
      <Flex vertical align="center" className={styles.fullHeight}>
        <CustomSkeleton height={"150px"} width={"100%"} />
        <Flex
          vertical
          gap="10px"
          justify="space-between"
          className={classNames(styles.fullHeight, styles.container)}
        >
          <MenuItem path="/settings" name="Настройки" />
          <MenuItem path="/logout" name="Выйти" classname={styles.logoutButton} />
        </Flex>
      </Flex>
    </Page>
  );
};
