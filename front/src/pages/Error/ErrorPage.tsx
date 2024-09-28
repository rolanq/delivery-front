import { Button, Flex, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const ErrorPage: FC = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <Content className={styles.wrapper}>
      <Flex vertical align="center" justify="center" gap="20px">
        <Flex vertical align="center">
          <Title level={2} style={{ margin: 0 }}>
            Ошибка 404
          </Title>
          <Typography>Страница не найдена</Typography>
        </Flex>

        <Button onClick={goToMainPage} className={styles.button} type="text">
          Вернуться
        </Button>
      </Flex>
    </Content>
  );
};
