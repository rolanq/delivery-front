import {
  CartItem,
  useAddItemToCartMutation,
  useDeleteCartItemsMutation,
} from "@graphql/index";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { Flex, Modal } from "antd";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useUserStore } from "@shared/stores/User";
import { useCartStore } from "@shared/stores/Cart";
import { CustomCounter } from "@shared/kit/CustomCounter/CustomCounter";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";

interface IProps {
  card: CartItem | null;
}

export const CartCard: FC<IProps> = ({ card }) => {
  const user = useUserStore((state) => state.user);
  const setCart = useCartStore((state) => state.setCart);
  const cart = useCartStore((state) => state.cart);
  const [count, setCount] = useState(card?.count ?? 1);
  const [openModal, setOpenModal] = useState(false);

  const [updateItem, { loading: isUpdating }] = useAddItemToCartMutation({
    onCompleted: (data) => {
      if (data.addItemToCart) {
        setCart(data.addItemToCart);
      }
    },
  });

  const [deleteItem, { loading: isDeleting }] = useDeleteCartItemsMutation({
    onCompleted: (data) => {
      if (data.deleteCartItems) {
        setCart(data.deleteCartItems);
      }
    },
  });

  const onDeleteItem = () => {
    deleteItem({
      variables: {
        data: { userId: user?.id, menuItemIds: [card?.menuItem?.id ?? ""] },
      },
    }).then(() => {
      setOpenModal(false);
    });
  };

  const onChange = (value: number) => {
    updateItem({
      variables: {
        data: {
          count: value,
          restuarantId: cart.restuarantId,
          menuItemId: Number(card?.menuItem?.id),
          userId: user?.id,
        },
      },
    });
    setCount(value);
  };

  return (
    <>
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
        <CustomCounter
          onMinValue={() => setOpenModal(true)}
          minValue={0}
          onChange={onChange}
          value={count}
          size="sm"
          loading={isDeleting || isUpdating}
        />
      </Flex>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeIcon={false}
        footer={
          <Flex gap="15px">
            <CustomButton
              label="Отмена"
              fullWidth
              onClick={() => setOpenModal(false)}
            />
            <CustomButton
              label="Да"
              fullWidth
              onClick={onDeleteItem}
              variant="secondary"
            />
          </Flex>
        }
      >
        <Flex gap="10px" vertical>
          <CustomText titleLevel={4}>
            Вы хотите удалить товар из корзины?
          </CustomText>
        </Flex>
      </Modal>
    </>
  );
};
