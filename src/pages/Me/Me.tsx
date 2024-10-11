import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { MeWidget } from "./MeWidget/MeWidget";
import { useUserStore } from "@shared/stores/User";
import { Layout } from "@shared/kit/Layout/Layout";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";

export const Me: FC = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  const onLogout = () => {
    localStorage.removeItem("token");
    logout();
  };

  return (
    <Layout footer paddingVertical scrollable={false}>
      {/* <CustomSkeleton height={"240px"} width={"100%"} /> */}
      <MeWidget />
      <Flex
        vertical
        gap="10px"
        justify="space-between"
        className={styles.container}
      >
        <CustomButton
          fullWidth
          type="link"
          path="/settings"
          label="Настройки"
          variant="primary"
        />
        {user && (
          <CustomButton
            onClick={onLogout}
            fullWidth
            type="link"
            path="/logout"
            label="Выйти"
            variant="secondary"
          />
        )}
      </Flex>
    </Layout>
  );
};
