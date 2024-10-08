import styles from "./styles.module.css";
import { Flex, Typography } from "antd";
import { useUserStore } from "@shared/stores/User";
import Title from "antd/es/typography/Title";
import { MenuItem } from "../MenuItem/MenuItem";
import classNames from "classnames";

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
          <Title level={3}>EKEE</Title>
          <Title level={3} style={{ color: "#C23B22" }}>
            R
          </Title>
        </Flex>

        {user ? (
          <>
            <Title level={5}>{user.name}</Title>
            <Flex vertical justify="flex-end" className={styles.info}>
              <Typography.Text>{user.phone}</Typography.Text>
              <Typography.Text>{user.address}</Typography.Text>
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
              <Title level={5}>Вы не авторизованы</Title>
              <MenuItem
                path="/login"
                name="Войти"
                classname={styles.loginButton}
              />
            </Flex>
          </>
        )}
      </Flex>
    </div>
  );
};
