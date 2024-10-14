import { MenuItem, useAddItemToCartMutation } from "@graphql/graphql";
import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { useUserStore } from "@shared/stores/User";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void;
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick }) => {
  const user = useUserStore((state) => state.user);

  const [addItem, { loading }] = useAddItemToCartMutation();

  const onClickPlus = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (!user?.id) {
      const prevCart = localStorage.getItem("ECart");
      const parsedPrevCart = prevCart ? JSON.parse(prevCart) : [];
      const newCart = [...parsedPrevCart, { id: menuItem?.id }];
      localStorage.setItem("ECart", JSON.stringify(newCart));
    } else {
      addItem({
        variables: {
          data: {
            count: 1,
            menuItemId: Number(menuItem?.id) ?? 0,
            userId: user.id,
          },
        },
      });
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
        loading={loading}
        onClick={onClickPlus}
        className={styles.buttonAdd}
        fullWidth
        variant="tertiary"
        label={<CustomIcon icon="PlusOutlined" variant="primary" />}
      />
    </Flex>
  );
};
