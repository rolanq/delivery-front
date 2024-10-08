import { Flex } from "antd";
import { FC } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import styles from "./styles.module.css";
import { Page } from "@shared/kit/Page/Page";
import { MeWidget } from "./MeWidget/MeWidget";
import { useUserStore } from "@shared/stores/User";

export const Me: FC = () => {
  const user = useUserStore((state) => state.user);
  
  return (
    <Page paddingVertical scrollable={false}>
      <Flex vertical align="center" className={styles.container} gap="30px">
        {/* <CustomSkeleton height={"240px"} width={"100%"} /> */}
        <MeWidget />
        <Flex
          vertical
          gap="10px"
          justify="space-between"
          className={styles.container}
        >
          <MenuItem path="/settings" name="Настройки" />
          {user && <MenuItem path="/logout" name="Выйти" classname={styles.logoutButton} />}
        </Flex>
      </Flex>
    </Page>
  );
};
