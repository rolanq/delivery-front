import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";
import { Flex } from "antd";
import styles from "./styles.module.css";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { useEffect, useState } from "react";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { PartialUpdateUserInput, useUpdateUserMutation } from "@graphql/index";
import { useUserStore } from "@shared/stores/User";
import {
  prepareInputValuesToUpdateUser,
} from "@shared/utils/utils";
import toast from "react-hot-toast";

export const Introduction = () => {
  const isOpenIntroduction = useAppStore((state) => state.isOpenIntroduction);
  const triggerIntroduction = useAppStore((state) => state.triggerIntroduction);
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  const [inputValues, setInputValues] = useState<PartialUpdateUserInput>({});

  const [updateUser, { loading }] = useUpdateUserMutation({
    onCompleted: (data) => {
      if (data.updateUser?.user) {
        setUser(data.updateUser.user);
        triggerIntroduction(false);

        toast.success("Изменения сохранены", {
          position: "top-center",
        });
      }
    },
    onError: (error) => {
      toast.error(error.message, { position: "top-center" });
    },
  });

  const onChangeName = (value: string) => {
    setInputValues((prev) => ({ ...prev, name: value }));
  };

  const onChangePhone = (value: string) => {
    setInputValues((prev) => ({ ...prev, phone: value }));
  };

  const onDismiss = () => {
    triggerIntroduction(false);

    const newDateTime = new Date();
    newDateTime.setHours(newDateTime.getHours() + 24);
    localStorage.setItem("IBSShouldOpen", newDateTime.toString());
  };

  const onSave = () => {
    updateUser({
      variables: {
        data: {
          ...inputValues,
          email: user?.email,
        },
      },
    });
  };

  useEffect(() => {
    setInputValues(prepareInputValuesToUpdateUser(user));
  }, [user]);

  return (
    <CustomBottomSheet
      snap={60}
      open={isOpenIntroduction}
      onDismiss={onDismiss}
      footerWithoutBoxShadow
      footer={
        <CustomButton
          onClick={onSave}
          loading={loading}
          label="Сохранить"
          variant="secondary"
          fullWidth
          className={styles.saveButton}
        />
      }
    >
      <Flex vertical align="center" className={styles.container} gap="35px">
        <CustomText titleLevel={3}>Давайте знакомиться</CustomText>

        <Flex gap="10px" vertical>
          <CustomInput
            value={inputValues?.name}
            onChange={onChangeName}
            placeholder="Имя"
          />
          <CustomInput
            value={inputValues?.phone}
            onChange={onChangePhone}
            placeholder="Номер телефона"
          />
        </Flex>
      </Flex>
    </CustomBottomSheet>
  );
};
