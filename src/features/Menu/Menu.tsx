import { useRestuarantStore } from "@shared/stores/Restuarant";
import { Flex, Modal } from "antd";
import styles from "./styles.module.css";
import { MenuCard } from "./MenuCard/MenuCard";
import { Categories } from "@features/Categories/Categories";
import { useState } from "react";
import {
  Cart,
  MenuItem,
  useAddItemToCartMutation,
  useDeleteCartItemsMutation,
} from "@graphql/graphql";
import { CustomBottomSheet } from "@shared/kit/CustomBottomSheet/CustomBottomSheet";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { useAppStore } from "@shared/stores/App";
import { useUserStore } from "@shared/stores/User";
import { CustomCounter } from "@shared/kit/CustomCounter/CustomCounter";
import { useCartStore } from "@shared/stores/Cart";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const triggerAuth = useAppStore((state) => state.triggerAuth);
  const setCart = useCartStore((state) => state.setCart);
  const navigate = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | undefined>(
    undefined
  );
  const [count, setCount] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  const [addItem, { loading }] = useAddItemToCartMutation();
  const [deleteItem, { loading: isDeleting }] = useDeleteCartItemsMutation({
    onCompleted: (data) => {
      setCart(data.deleteCartItems as Cart);
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
    }).then(() => {
      setModalOpen(false);
    });
  };

  const onClickMenuItem = (item: MenuItem | null) => {
    if (item) {
      setActiveMenuItem(item);
    }
  };

  const onCloseBottomSheet = () => {
    setActiveMenuItem(undefined);
  };

  const onAddToCart = () => {
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
            count,
            menuItemId: Number(activeMenuItem?.id ?? 0),
            userId: user.id,
            restuarantId: Number(restuarant?.id ?? 0),
          },
        },
      });
    } else {
      triggerAuth(true);
    }
  };

  const onChangeCount = (value: number) => {
    setCount(value);
  };

  if (
    !restuarant?.MenuCategories?.map((category) => category?.MenuItems).flatMap(
      (menuItem) => menuItem
    ).length
  ) {
    return (
      <Flex vertical className={styles.menuList} gap="20px">
        <CustomText titleLevel={3}>
          Ой, у ресторана пока нет товаров.
        </CustomText>
      </Flex>
    );
  }

  return (
    <>
      <Categories />
      <Flex vertical className={styles.menuList} gap="20px">
        {restuarant?.MenuCategories?.map((category) => (
          <Flex key={category?.id} id={category?.id} vertical>
            <CustomText titleLevel={3}>{category?.name}</CustomText>
            <Flex wrap>
              {category?.MenuItems?.map((menuItem) => (
                <MenuCard
                  key={menuItem?.id}
                  menuItem={menuItem}
                  onClick={onClickMenuItem}
                  setModalOpen={setModalOpen}
                />
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>

      <CustomBottomSheet
        snap={90}
        open={!!activeMenuItem}
        onDismiss={onCloseBottomSheet}
        footer={
          <Flex
            className={styles.bottomSheetFooter}
            vertical
            justify="space-between"
            gap="15px"
          >
            <Flex align="center" justify="space-between">
              <Flex gap="5px" align="center">
                <CustomText size="md">{activeMenuItem?.name}</CustomText>
                <CustomText variant="tertiary" size="sm">
                  {activeMenuItem?.weight} гр.
                </CustomText>
              </Flex>
              <Flex gap="10px">
                <CustomText titleLevel={4}>
                  {activeMenuItem?.price} р
                </CustomText>
              </Flex>
            </Flex>
            <Flex gap="10px">
              <CustomCounter
                minValue={0}
                onChange={onChangeCount}
                value={count}
              />
              <CustomButton
                onClick={onAddToCart}
                loading={loading}
                fullWidth
                label="Добавить в корзину"
                variant="secondary"
              />
            </Flex>
          </Flex>
        }
      >
        <Flex vertical className={styles.bottomSheet}>
          <CustomImage
            src={activeMenuItem?.image ?? ""}
            width="100%"
            height="100%"
            borderRadius="24px 24px 0 0"
            className={styles.bottomSheetImage}
          />
          <Flex vertical className={styles.bottomSheetContent}>
            <CustomText size="sm">{activeMenuItem?.description}</CustomText>
          </Flex>
        </Flex>
      </CustomBottomSheet>
      <Modal
        closeIcon={false}
        open={isModalOpen}
        onCancel={() => setModalOpen(false)}
        footer={
          <>
            <Flex gap="15px" vertical>
              <CustomButton
                label="Открыть ресторан"
                onClick={() => navigate(`/r/${cart.restuarantId}`)}
                fullWidth
              />
              <Flex gap="15px">
                <CustomButton
                  label="Отмена"
                  onClick={() => setModalOpen(false)}
                  fullWidth
                />
                <CustomButton
                  onClick={onDeleteCart}
                  label="Да"
                  fullWidth
                  variant="secondary"
                  loading={isDeleting}
                />
              </Flex>
            </Flex>
          </>
        }
      >
        <Flex vertical gap="10px" className={styles.modalBody}>
          <CustomText titleLevel={4} className={styles.modalText}>
            Добавлять товары можно только из одного ресторана
          </CustomText>
          <CustomText className={styles.modalText}>
            Очистить корзину и добавить товар в новую корзину?
          </CustomText>
        </Flex>
      </Modal>
    </>
  );
};
