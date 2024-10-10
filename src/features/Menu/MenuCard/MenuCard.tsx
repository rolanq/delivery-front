import { MenuItem } from "@graphql/graphql";
import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { CustomText } from "@shared/kit/CustomText/CustomText";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void;
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick }) => {
  return (
    <Flex
      className={styles.container}
      vertical
      justify="space-between"
      onClick={() => onClick(menuItem)}
    >
      <Flex vertical>
        <div className={styles.imageContainer}>
          <CustomImage src={menuItem?.image ?? ""} height="auto" />
        </div>

        <Flex vertical className={styles.info}>
          <CustomText classname={styles.price} marginBottom>
            {menuItem?.price} р
          </CustomText>
          <CustomText size="sm" marginBottom>
            {menuItem?.name}
          </CustomText>
        </Flex>
      </Flex>

      <CustomButton
        className={styles.buttonAdd}
        fullWidth
        variant="tertiary"
        label={<PlusOutlined style={{color: "black"}} />}
      />
    </Flex>
  );
};
