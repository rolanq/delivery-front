import { MenuItem } from "@graphql/graphql";
import { Flex, Typography } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { PlusOutlined } from "@ant-design/icons";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick }) => {
  return (
    <Flex className={styles.container} vertical onClick={() => onClick(menuItem)}>
      <div className={styles.imageContainer}>
        <CustomImage src={menuItem?.image ?? ""} height="auto" />
      </div>

      <Flex vertical className={styles.info}>
        <Typography.Text className={styles.price}>
          {menuItem?.price} р
        </Typography.Text>
        <Typography.Text className={styles.name}>
          {menuItem?.name}
        </Typography.Text>
      </Flex>

      <CustomButton
        className={styles.buttonAdd}
        fullWidth
        variant="tertiary"
        label={<PlusOutlined />}
      />
    </Flex>
  );
};
