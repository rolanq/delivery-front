import { Button, Flex, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Page } from "@shared/kit/Page/Page";

export const ErrorPage: FC = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <Page>
      <Flex vertical align="center" justify="center" gap="20px" className={styles.container}>
        <Flex vertical align="center">
          <Title level={2} style={{ margin: 0 }}>
            Ошибка 404
          </Title>
          <Typography>Страница не найдена</Typography>
        </Flex>

        <Button
          onClick={goToMainPage}
          className={styles.button}
          type="primary"
          color="default"
        >
          Вернуться
        </Button>
      </Flex>
    </Page>
  );
};
