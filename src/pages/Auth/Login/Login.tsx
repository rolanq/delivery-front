import { Layout } from "@shared/kit/Layout/Layout";
import { Flex} from "antd";
import { FC, useState } from "react";
import styles from "../styles.module.css";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";

export const Login: FC = () => {
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
          <CustomText titleLevel={3}>Авторизация</CustomText>

          <Flex vertical gap="30px" className={styles.wFull}>
            <CustomInput
              onChange={onChangeLogin}
              value={login}
              placeholder="Номер телефона или почта"
            />
            <CustomInput
              onChange={onChangePassword}
              value={password}
              placeholder="Пароль"
              type="password"
            />
            <CustomButton label="Войти" variant="secondary" fullWidth />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};
