import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { Layout } from "@shared/kit/Layout/Layout";
import { Flex } from "antd";
import { FC, useState } from "react";
import styles from "../styles.module.css";
import { useSignUpMutation } from "@graphql/graphql";

export const Registration: FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [signUp] = useSignUpMutation({
    onCompleted(data) {
      if (data.signUp?.token) {
        localStorage.setItem("token", data.signUp?.token);
      }
    },
  });

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeName = (value: string) => {
    setName(value);
  };

  const onSumbit = () => {
    signUp({
      variables: {
        email,
        name,
        password,
      },
    });
  };

  return (
    <Layout goBackButton>
      <Flex justify="center" align="center" className={styles.content}>
        <Flex align="center" gap="50px" vertical className={styles.form}>
          <CustomText titleLevel={3}>Регистрация</CustomText>
          <Flex vertical gap="15px" className={styles.wFull}>
            {/* <Flex gap="10px">
              
            </Flex> */}
            <CustomInput
              onChange={onChangeName}
              value={name}
              placeholder="Имя"
            />
            <CustomInput
              onChange={onChangeEmail}
              value={email}
              placeholder="Почта"
              type="email"
            />
            <CustomInput
              onChange={onChangePassword}
              value={password}
              placeholder="Пароль"
              type="password"
            />
          </Flex>
          <CustomButton
            label="Зарегистрироваться"
            variant="secondary"
            fullWidth
            onClick={onSumbit}
          />
        </Flex>
      </Flex>
    </Layout>
  );
};
