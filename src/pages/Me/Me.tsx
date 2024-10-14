import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { MeWidget } from "./MeWidget/MeWidget";
import { useUserStore } from "@shared/stores/User";
import { Layout } from "@shared/kit/Layout/Layout";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import toast from "react-hot-toast";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import maskot from "@assets/maskot.png";

export const Me: FC = () => {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  const triggerAuth = useAppStore((state) => state.triggerAuth);
  const triggerIntroduction = useAppStore((state) => state.triggerIntroduction);

  const onClickAuth = () => {
    triggerAuth(true);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    logout();
    toast.success("Вы успешно вышли из аккаунта!");
  };

  const onClickSettings = () => {
    triggerIntroduction(true);
  };

  return (
    <Layout footer paddingVertical scrollable={false}>
      {user ? (
        <>
          <MeWidget />
          <Flex
            vertical
            gap="10px"
            justify="space-between"
            className={styles.container}
          >
            <CustomButton
              onClick={onClickSettings}
              fullWidth
              label="Настройки"
              variant="primary"
            />
            {user && (
              <>
                <CustomButton
                  onClick={onLogout}
                  fullWidth
                  label="Выйти"
                  variant="secondary"
                />
              </>
            )}
          </Flex>
        </>
      ) : (
        <Flex
          vertical
          gap="25px"
          justify="center"
          align="center"
          className={styles.loginWrapper}
        >
          <CustomImage
            height="180px"
            src={maskot}
            withBackground={false}
            imageFullHeight
            imageFullWidth={false}
          />
          <Flex vertical gap="10px" align="center">
            <CustomText titleLevel={3}>Войдите в аккаунт</CustomText>
            <CustomText className={styles.loginText} size="lg">
              Чтобы заказывать еду
            </CustomText>
          </Flex>
          <CustomButton
            onClick={onClickAuth}
            label="Войти по почте"
            variant="secondary"
            className={styles.loginButton}
          />
        </Flex>
      )}
    </Layout>
  );
};
