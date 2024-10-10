import styles from "./styles.module.css";
import { Flex } from "antd";
import { CustomHeader } from "@shared/kit/CustomHeader/CustomHeader";
import { CustomText } from "@shared/kit/CustomText/CustomText";

export const Header = () => {
  return (
    <>
      <CustomHeader>
        <Flex className={styles.content} justify="center" align="center">
          <CustomText titleLevel={3}>EKEE</CustomText>
          <CustomText titleLevel={3} variant="fourth">
            R
          </CustomText>
        </Flex>
      </CustomHeader>
    </>
  );
};
