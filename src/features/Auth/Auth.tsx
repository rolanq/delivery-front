import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";
import { Flex } from "antd";
import styles from "./styles.module.css";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { useState } from "react";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import classNames from "classnames";

enum Steps {
  first = "first",
  second = "second",
}

export const Auth = () => {
  const appStore = useAppStore();
  const [step, setStep] = useState(Steps.first);
  const [email, setEmail] = useState("");

  const onDismiss = () => {
    appStore.triggerAuthBottomSheet(false);
  };

  return (
    <CustomBottomSheet
      footer={
        <Flex>
          <CustomText
            marginTop
            className={styles.confirmText}
            size="sm"
            variant="tertiary"
          >
            Совершая авторизацию вы соглашаетесь с политикой бла-бла-бла
          </CustomText>
        </Flex>
      }
      footerWithoutBoxShadow
      snap={40}
      onDismiss={onDismiss}
      open={appStore.AuthBottomSheetOpen}
    >
      <Flex
        className={classNames(styles.container, styles.fullW)}
        vertical
        align="center"
        justify="space-between"
        gap="20px"
      >
        <Flex gap="20px" vertical className={styles.fullW}>
          <Flex vertical align="center" gap="15px">
            <CustomText titleLevel={4}>Привет!</CustomText>
            <CustomText weight={500}>Введите почту, чтобы войти</CustomText>
          </Flex>
          <Flex className={classNames(styles.input, styles.fullW)}>
            <CustomInput
              fullWidth
              fullHeight
              onChange={(v) => setEmail(v)}
              value={email}
              placeholder="Почта"
            />
          </Flex>
          <Flex className={classNames(styles.fullW)}>
            {step === Steps.first ? (
              <CustomButton
                fullWidth
                label="Отправить код"
                variant="secondary"
                onClick={() => setStep(Steps.second)}
              />
            ) : (
              <CustomInput
                fullWidth
                fullHeight
                onChange={(v) => setEmail(v)}
                value={email}
                placeholder="Введите код подтверждения"
              />
            )}
          </Flex>
          {step === Steps.second && (
            <CustomButton fullWidth label="Войти" variant="secondary" />
          )}
        </Flex>
      </Flex>
    </CustomBottomSheet>
  );
};
