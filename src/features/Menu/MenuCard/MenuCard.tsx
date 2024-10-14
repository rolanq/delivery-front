import {
  MenuItem,
  useAddItemToCartMutation,
  useDeleteCartItemsMutation,
} from "@graphql/graphql";
import { Flex } from "antd";
import { FC, useState } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { useUserStore } from "@shared/stores/User";
import { useRestuarantStore } from "@shared/stores/Restuarant";
import { useCartStore } from "@shared/stores/Cart";
import { useAppStore } from "@shared/stores/App";
import { CustomCounter } from "@shared/kit/CustomCounter/CustomCounter";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick, setModalOpen }) => {
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const triggerAuth = useAppStore((state) => state.triggerAuth);

  const isItemAdded = cart.cart?.find(
    (cartItem) => cartItem?.menuItem?.id === menuItem?.id
  );

  const [count, setCount] = useState(isItemAdded?.count);

  const [addItem, { loading }] = useAddItemToCartMutation({
    onCompleted: (data) => {
      if (!!data.addItemToCart) {
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
        data: { userId: user?.id, menuItemIds: [menuItem?.id ?? ""] },
      },
    })
  };

  const onChange = (value: number) => {
    addItem({
      variables: {
        data: {
          count: value,
          restuarantId: cart.restuarantId,
          menuItemId: Number(menuItem?.id),
          userId: user?.id,
        },
      },
    });
    setCount(value);
  };

  const onClickPlus = (e?: React.MouseEvent<HTMLElement>) => {
    e?.stopPropagation();

    if (
      cart &&
      !!cart.restuarantId &&
      cart.restuarantId !== Number(restuarant?.id ?? 0)
    ) {
      setModalOpen(true);
      return;
    }

    if (user?.id) {
      addItem({
        variables: {
          data: {
            count: 1,
            menuItemId: Number(menuItem?.id ?? 0),
            userId: user.id,
            restuarantId: Number(restuarant?.id ?? 0),
          },
        },
      });
    } else {
      triggerAuth(true);
    }
  };

  return (
    <>
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

        {!isItemAdded ? (
          <CustomButton
            loading={loading}
            onClick={onClickPlus}
            className={styles.buttonAdd}
            fullWidth
            variant="tertiary"
            label={<CustomIcon icon="PlusOutlined" variant="primary" />}
          />
        ) : (
          <CustomCounter
            onMinValue={onDeleteItem}
            className={styles.counter}
            minValue={0}
            onChange={onChange}
            value={count ?? 1}
            size="sm"
            loading={loading || isDeleting}
          />
        )}
      </Flex>
    </>
  );
};
