import styles from "./styles.module.css";
import { Flex } from "antd";
import { useUserStore } from "@shared/stores/User";
import classNames from "classnames";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";

export const MeWidget = () => {
  const user = useUserStore((state) => state.user);

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
              <CustomText size="sm">{user.phone}</CustomText>
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
              <CustomText titleLevel={5} marginBottom>
                Мы не распознали вас
              </CustomText>
              <CustomButton
                label="Войти"
                variant="secondary"
                type="link"
                path="/login"
              />
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
};
