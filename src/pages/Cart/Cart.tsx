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
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import maskot from "@assets/maskot.png";

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
    navigate(`/r/${cart.restuarantId}`);
  };

  const isEmpty = !cart.cart?.length;
  const fullPrice = cart.cart?.reduce((acc, cartItem) => {
    if (cartItem?.menuItem?.price) {
      return acc + cartItem.menuItem.price;
    }
    return acc;
  }, 0);

  return (
    <Layout
      goBackButton
      paddingVertical
      title={
        <>
          {!isEmpty && (
            <Flex justify="space-between" align="center">
              <CustomText marginBottom titleLevel={2}>
                Корзина
              </CustomText>
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
      footerHeight="120px"
      customFooter={
        <Flex vertical className={styles.footer} justify="space-between">
          <Flex justify="space-between" align="center">
            <CustomText>Доставит курьер: ~35 мин</CustomText>
            <CustomText titleLevel={4}>{fullPrice} р</CustomText>
          </Flex>
          <CustomButton
            label="Всё верно"
            variant="secondary"
            fullWidth
            className={styles.payButton}
          />
        </Flex>
      }
      footer={!isEmpty}
    >
      {!isEmpty ? (
        <>
          <Flex className={styles.cartWrapper} vertical justify="space-between">
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
          </Flex>
        </>
      ) : (
        <>
          <Flex
            className={styles.cartWrapper}
            vertical
            gap="25px"
            justify="center"
            align="center"
          >
            <CustomImage
              height="180px"
              src={maskot}
              withBackground={false}
              imageFullHeight
              imageFullWidth={false}
            />
            <Flex vertical gap="10px" align="center">
              <CustomText titleLevel={3}>Ваша корзина пуста</CustomText>
              <CustomText className={styles.emptyCartText} size="lg">
                А товаров полно - выбирайте из понравившихся
              </CustomText>
            </Flex>
            <CustomButton
              label="Открыть меню"
              onClick={() => navigate("/")}
              variant="secondary"
              className={styles.payButton}
            />
          </Flex>
        </>
      )}
    </Layout>
  );
};
