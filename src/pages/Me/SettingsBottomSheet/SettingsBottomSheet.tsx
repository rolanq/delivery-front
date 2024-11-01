import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { Flex } from "antd";
import { FC, FocusEvent, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { PartialUpdateUserInput, useUpdateUserMutation } from "@graphql/index";
import { useUserStore } from "@shared/stores/User";
import { prepareInputValuesToUpdateUser } from "@shared/utils/utils";
import toast from "react-hot-toast";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsBottomSheet: FC<IProps> = ({ isOpen, onClose }) => {
  const user = useUserStore((state) => state.user);
  const [values, setValues] =
    useState<Exclude<PartialUpdateUserInput, "verifyCode">>();
  const setUser = useUserStore((state) => state.setUser);

  const onChange = (e: FocusEvent<HTMLInputElement>, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: value,
      email: user?.email ?? "",
    }));
  };

  const [updateUser, { loading }] = useUpdateUserMutation({
    onCompleted: (data) => {
      if (data.updateUser?.user) {
        setUser(data.updateUser.user);
        onClose();

        toast.success("Изменения сохранены", {
          position: "top-center",
        });
      }
    },
    onError: (error) => {
      toast.error(error.message, { position: "top-center" });
    },
  });

  useEffect(() => {
    setValues(prepareInputValuesToUpdateUser(user));
  }, [user]);

  const onSave = () => {
    updateUser({
      variables: {
        data: {
          ...values,
          email: user?.email ?? "",
        },
      },
    });
  };

  return (
    <CustomBottomSheet
      snap={50}
      open={isOpen}
      onDismiss={onClose}
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
      <Flex vertical align="center" className={styles.content} gap="30px">
        <CustomText titleLevel={3}>Настройки</CustomText>
        <Flex vertical gap="10px" className={styles.content}>
          <CustomInput
            value={values?.name}
            onChange={onChange}
            placeholder="Имя"
            name="name"
          />
          {/* <CustomMaskInput
            value={values?.phone}
            onChange={onChange}
            placeholder="Номер телефона"
            name="phone"
            mask="+7 (999) 999 99-99"
          /> */}
        </Flex>
      </Flex>
    </CustomBottomSheet>
  );
};
