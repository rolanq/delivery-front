import { Cart, CartItem, useDeleteCartItemsMutation } from "@graphql/index";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { useUserStore } from "@shared/stores/User";
import { useCartStore } from "@shared/stores/Cart";

interface IProps {
  card: CartItem | null;
}

export const CartCard: FC<IProps> = ({ card }) => {
  const user = useUserStore((state) => state.user);
  const setCart = useCartStore((state) => state.setCart);

  const [deleteItem, { loading }] = useDeleteCartItemsMutation({
    onCompleted: (data) => {
      setCart(data.deleteCartItems as Cart);
    },
  });

  const onDeleteItem = () => {
    deleteItem({
      variables: {
        data: { userId: user?.id, menuItemIds: [card?.menuItem?.id ?? ""] },
      },
    });
  };

  return (
    <Flex className={styles.container} align="center" justify="space-between">
      <Flex gap="10px" align="center">
        <CustomImage
          src={card?.menuItem?.image ?? ""}
          height="60px"
          width="60px"
          borderRadius="12px"
        />
        <Flex vertical gap="5px">
          <CustomText size="md">
            {card?.menuItem?.name ? card.menuItem.name : ""}
          </CustomText>
          <Flex gap="3px">
            <CustomText size="sm">
              {card?.menuItem?.price ? card.menuItem.price : ""} р
            </CustomText>
            <CustomText size="sm" variant="tertiary">
              ·
            </CustomText>
            <CustomText size="sm" variant="tertiary">
              {card?.menuItem?.weight ? card.menuItem.weight : ""} гр
            </CustomText>
          </Flex>
        </Flex>
      </Flex>
      <CustomButton
        loading={loading}
        onClick={onDeleteItem}
        label={<CustomIcon icon="DeleteOutlined" />}
      />
    </Flex>
  );
};
