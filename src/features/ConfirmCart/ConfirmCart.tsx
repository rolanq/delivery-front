import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import classNames from "classnames";
import { CustomInput } from "@shared/kit/CustomInput/CustomInput";
import { SBPBlock } from "./SBPBlock/SBPBlock";
import { useCartStore } from "@shared/stores/Cart";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmCart: FC<IProps> = ({ open = false, setOpen }) => {
  const cart = useCartStore((state) => state.cart);
  const onDismiss = () => {
    setOpen(false);
  };

  const onChange = () => {};

  return (
    <CustomBottomSheet
      closeIcon={false}
      open={open}
      onDismiss={onDismiss}
      snap={90}
      footer={
        <Flex gap="15px" align="center">
          <Flex className={styles.fullPriceBlock} vertical align="center">
            <CustomText titleLevel={4}>Итого</CustomText>
            <CustomText titleLevel={5}>{cart.fullPrice} р</CustomText>
          </Flex>
          <CustomButton variant="secondary" fullWidth label="К оплате" />
        </Flex>
      }
      footerWithoutBoxShadow
    >
      <Flex className={styles.container} align="center" vertical gap="10px">
        <Flex className={classNames(styles.block)} vertical>
          <CustomText titleLevel={3} marginBottom>
            Доставка
          </CustomText>
          <Flex gap="15px" vertical className={styles.contentBlock}>
            <Flex gap="15px">
              <CustomInput placeholder="Улица" onChange={onChange} />
              <CustomInput placeholder="Дом" onChange={onChange} />
            </Flex>
            <Flex gap="15px">
              <CustomInput placeholder="Кв/Офис" onChange={onChange} />
              <CustomInput placeholder="Код домофона" onChange={onChange} />
            </Flex>
            <Flex gap="15px">
              <CustomInput placeholder="Подъезд" onChange={onChange} />
              <CustomInput placeholder="Этаж" onChange={onChange} />
            </Flex>
            <CustomInput placeholder="Комментарий курьеру" onChange={onChange} />
            <CustomInput placeholder="Телефон получателя" onChange={onChange} />
          </Flex>
        </Flex>
        <Flex className={classNames(styles.block)} vertical>
          <CustomText titleLevel={3} marginBottom>
            Оплата
          </CustomText>
          <Flex className={styles.contentBlock}>
            <SBPBlock />
          </Flex>
        </Flex>
        <Flex className={classNames(styles.block)} vertical>
          <CustomText titleLevel={3} marginBottom>
            Что в цене
          </CustomText>
          <Flex vertical gap="5px" className={styles.contentBlock}>
            <Flex justify="space-between">
              <CustomText>Товары в корзине</CustomText>
              <CustomText>{cart.fullPrice} р</CustomText>
            </Flex>
            <Flex justify="space-between">
              <CustomText>Доставка</CustomText>
              <CustomText>{cart.fullPrice} р</CustomText>
            </Flex>
            <Flex justify="space-between">
              <CustomText>Сервисный сбор</CustomText>
              <CustomText>29 р</CustomText>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </CustomBottomSheet>
  );
};
