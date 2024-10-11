import { Button, Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Layout } from "@shared/kit/Layout/Layout";
import { CustomText } from "@shared/kit/CustomText/CustomText";

export const ErrorPage: FC = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate("/");
  };

  return (
    <Layout>
      <Flex
        vertical
        align="center"
        justify="center"
        gap="20px"
        className={styles.container}
      >
        <Flex vertical align="center">
          <CustomText titleLevel={3}>Ой, что-то сломалсь</CustomText>
          <CustomText>Мы не смогли найти страницу</CustomText>
        </Flex>

        <Button
          onClick={goToMainPage}
          className={styles.button}
          type="primary"
          color="default"
        >
          <CustomText variant="secondary">Вернуться</CustomText>
        </Button>
      </Flex>
    </Layout>
  );
};
