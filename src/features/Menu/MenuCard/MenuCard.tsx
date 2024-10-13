import { MenuItem } from "@graphql/graphql";
import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { useAppStore } from "@shared/stores/App";
import { useUserStore } from "@shared/stores/User";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void;
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick }) => {
  const user = useUserStore((state) => state.user);
  const triggerAuthBottomSheet = useAppStore(
    (state) => state.triggerAuthBottomSheet
  );

  const onClickPlus = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (!user?.id) {
      triggerAuthBottomSheet(true);
    }
  };

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
          <CustomText className={styles.price} marginBottom>
            {menuItem?.price} р
          </CustomText>
          <CustomText size="sm" marginBottom>
            {menuItem?.name}
          </CustomText>
        </Flex>
      </Flex>

      <CustomButton
        onClick={onClickPlus}
        className={styles.buttonAdd}
        fullWidth
        variant="tertiary"
        label={<CustomIcon icon="PlusOutlined" />}
      />
    </Flex>
  );
};
