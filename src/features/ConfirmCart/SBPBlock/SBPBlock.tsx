import { Flex } from "antd";
import styles from "./styles.module.css";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { CustomText } from "@shared/kit/CustomText/CustomText";

export const SBPBlock = () => {
  return (
    <Flex className={styles.block} vertical gap="10px">
      <CustomIcon icon="CreditCardOutlined" />
      <CustomText titleLevel={5}>СБП</CustomText>
    </Flex>
  );
};
