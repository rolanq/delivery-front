import styles from "./styles.module.css";
import { Flex } from "antd";
import { useUserStore } from "@shared/stores/User";
import classNames from "classnames";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";

export const MeWidget = () => {
  const user = useUserStore((state) => state.user);
  const triggerAuth = useAppStore((state) => state.triggerAuthBottomSheet);

  const onClickAuth = () => {
    triggerAuth(true);
  };

  return (
    <div className={styles.wrapper}>
      <Flex className={styles.content} vertical>
        <Flex
          className={classNames(
            styles.cardTitle,
            !user ? styles.blur : undefined
          )}
        >
          <CustomText titleLevel={3}>EKEE</CustomText>
          <CustomText titleLevel={3} variant="fourth">
            R
          </CustomText>
        </Flex>

        {user ? (
          <>
            <CustomText titleLevel={5}>{user.name}</CustomText>
            <Flex vertical justify="flex-end" className={styles.info}>
              <CustomText size="sm">{user.email}</CustomText>
              <CustomText size="sm">{user.address}</CustomText>
            </Flex>
          </>
        ) : (
          <>
            <Flex
              vertical
              align="center"
              justify="center"
              className={styles.info}
            >
              <CustomText
                titleLevel={5}
                marginBottom
                className={styles.infoText}
              >
                Войдите в аккаунт.
              </CustomText>
              <CustomText marginBottom className={styles.infoText}>
                Чтобы заказывать еду. Это быстро и удобно
              </CustomText>
              <CustomButton
                onClick={onClickAuth}
                label="Войти"
                variant="secondary"
              />
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
};
