import { Layout } from "@shared/kit/Layout/Layout";
import { Flex, Form, Input } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";

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
            label={<CustomText titleLevel={5}>Номер телефона или почта</CustomText>}
            name="login"
            rules={[
              { required: true, message: "Введите номер телефона или почту" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label={<CustomText titleLevel={5}>Пароль</CustomText>}
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
