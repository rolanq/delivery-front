import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";
import { Flex } from "antd";
import styles from "./styles.module.css";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { useState } from "react";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import classNames from "classnames";
import { useSignUpMutation, useUpdateUserMutation } from "@graphql/graphql";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import maskot from "@assets/maskot.png";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";

enum Steps {
  first = "first",
  second = "second",
}

export const Auth = () => {
  const appStore = useAppStore();
  const [step, setStep] = useState(Steps.first);
  const [email, setEmail] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const navigate = useNavigate();

  const [signUp, { loading: isLoadingSignUp }] = useSignUpMutation({
    onCompleted: (data) => {
      if (data.signUp?.success === "true") {
        setStep(Steps.second);
      }
    },
    onError: (error) => {
      toast.error(error.message, { position: "top-center" });
    },
  });
  const [confirm] = useUpdateUserMutation({
    onCompleted: (data) => {
      if (data.updateUser?.token && data.updateUser.user?.id) {
        localStorage.setItem("token", data.updateUser?.token);

        toast.success("Вы успешно зарегистрировались!", {
          position: "top-center",
        });

        navigate("/");
        onDismiss();
      }
    },
    onError: (error) => {
      toast.error(error.message, { position: "top-center" });
    },
  });

  const onSignUp = () => {
    signUp({ variables: { data: { email } } });
  };

  const onConfirm = () => {
    confirm({ variables: { data: { email, verifyCode: confirmCode } } });
  };

  const onDismiss = () => {
    appStore.triggerAuthBottomSheet(false);

    const newDateTime = new Date();
    newDateTime.setHours(newDateTime.getHours() + 2);
    localStorage.setItem("ABSShouldOpen", newDateTime.toString());
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
      snap={80}
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
          <CustomImage
            className={styles.imageContainer}
            height="180px"
            src={maskot}
            withBackground={false}
            imageFullHeight
            imageFullWidth={false}
          />
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
                loading={isLoadingSignUp}
                label="Отправить код"
                variant="secondary"
                onClick={onSignUp}
              />
            ) : (
              <CustomInput
                fullWidth
                fullHeight
                onChange={(v) => setConfirmCode(v)}
                value={confirmCode}
                placeholder="Введите код подтверждения"
              />
            )}
          </Flex>
          {step === Steps.second && (
            <CustomButton
              onClick={onConfirm}
              fullWidth
              label="Войти"
              variant="secondary"
            />
          )}
        </Flex>
      </Flex>
    </CustomBottomSheet>
  );
};
