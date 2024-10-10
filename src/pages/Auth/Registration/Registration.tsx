import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { Layout } from "@shared/kit/Layout/Layout";
import { Flex } from "antd";
import React, { FC, useState } from "react";
import styles from "../styles.module.css";

export const Registration: FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (value: string) => {
    setLogin(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <Layout goBackButton>
      <Flex justify="center" align="center" className={styles.content}>
        <Flex align="center" gap="50px" vertical className={styles.form}>
          <CustomText titleLevel={3}>Регистрация</CustomText>

          <Flex vertical gap="15px" className={styles.wFull}>
            <Flex gap="10px">
              <CustomInput
                onChange={onChangeLogin}
                value={login}
                placeholder="Имя"
              />
              <CustomInput
                onChange={onChangeLogin}
                value={login}
                placeholder="Фамилия"
              />
            </Flex>
            <CustomInput
              onChange={onChangeLogin}
              value={login}
              placeholder="Номер телефона"
            />
            <CustomInput
              onChange={onChangeLogin}
              value={login}
              placeholder="Почта"
            />
            <CustomInput
              onChange={onChangePassword}
              value={password}
              placeholder="Пароль"
              type="password"
            />
            <CustomInput
              onChange={onChangePassword}
              value={password}
              placeholder="Подтвердите пароль"
              type="password"
            />
          </Flex>
          <CustomButton label="Зарегистрироваться" variant="secondary" fullWidth />
        </Flex>
      </Flex>
    </Layout>
  );
};
