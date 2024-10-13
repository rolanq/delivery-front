import { Flex } from "antd";
import { FC } from "react";
import { Layout } from "@shared/kit/Layout/Layout";
import { CartList } from "@features/CartList/CartList";
import { useCartStore } from "@shared/stores/Cart";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import styles from "./styles.module.css";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { Cart as CartType, useDeleteCartItemsMutation } from "@graphql/index";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { useUserStore } from "@shared/stores/User";
import { CustomBr } from "@shared/kit/CustomBr/CustomBr";
import { useNavigate } from "react-router-dom";

export const Cart: FC = () => {
  const user = useUserStore((state) => state.user);
  const setCart = useCartStore((state) => state.setCart);
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();

  const [deleteItem, { loading: isDeleting }] = useDeleteCartItemsMutation({
    onCompleted: (data) => {
      setCart(data.deleteCartItems as CartType);
    },
  });

  const onDeleteCart = () => {
    deleteItem({
      variables: {
        data: {
          userId: user?.id,
          menuItemIds: cart.cart?.map((item) => item?.menuItem?.id ?? ""),
        },
      },
    });
  };

  const onOpenMenu = () => {
    navigate("/");
  };

  const isEmpty = !cart.cart?.length;

  return (
    <Layout
      goBackButton
      paddingVertical
      title={
        <>
          {!isEmpty && (
            <Flex justify="space-between" align="center">
              <CustomText titleLevel={2}>Корзина</CustomText>
              <CustomButton
                variant="secondary"
                loading={isDeleting}
                onClick={onDeleteCart}
                label={<CustomIcon variant="secondary" icon="DeleteOutlined" />}
              />
            </Flex>
          )}
        </>
      }
      customFooter={
        <CustomButton
          label="К оплате"
          variant="secondary"
          fullWidth
          className={styles.payButton}
        />
      }
      footer={!isEmpty}
    >
      <Flex className={styles.cartWrapper} vertical justify="space-between">
        {!isEmpty ? (
          <>
            <Flex justify="center" vertical gap="10px">
              <CartList />
              <Flex align="center" vertical gap="50px">
                <CustomBr width="50%" className={styles.br} />
                <CustomButton
                  label="Открыть меню"
                  fullWidth
                  onClick={onOpenMenu}
                />
              </Flex>
            </Flex>
          </>
        ) : (
          <CustomText titleLevel={4}>Ваша корзина пуста</CustomText>
        )}
      </Flex>
    </Layout>
  );
};
