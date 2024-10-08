import { Layout } from "@shared/kit/Layout/Layout";
import { Flex, Form, Input } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import Title from "antd/es/typography/Title";

type FieldType = {
  login?: string;
  password?: string;
};

export const Login: FC = () => {
  return (
    <Layout goBackButton>
      <Flex align="center" justify="center" className={styles.content}>
        <Form>
          <Form.Item<FieldType>
            label={<Title level={5}>Номер телефона или почта</Title>}
            name="login"
            rules={[
              { required: true, message: "Введите номер телефона или почту" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label={<Title level={5}>Пароль</Title>}
            name="password"
            rules={[{ required: true, message: "Введите пароль" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className={styles.buttonWrapper}>
            <CustomButton
              label="Войти"
              variant="secondary"
              labelPosition="center"
            />
          </Form.Item>
        </Form>
      </Flex>
    </Layout>
  );
};
