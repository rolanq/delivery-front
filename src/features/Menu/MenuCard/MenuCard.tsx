import {
  Cart,
  MenuItem,
  useAddItemToCartMutation,
  useDeleteCartItemsMutation,
} from "@graphql/graphql";
import { Flex, Modal } from "antd";
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
import { useNavigate } from "react-router-dom";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void;
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick }) => {
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const triggerAuth = useAppStore((state) => state.triggerAuth);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

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
      onClickPlus();
      setModalOpen(false);
    });
  };

  const [addItem, { loading }] = useAddItemToCartMutation();

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

        <CustomButton
          loading={loading}
          onClick={onClickPlus}
          className={styles.buttonAdd}
          fullWidth
          variant="tertiary"
          label={<CustomIcon icon="PlusOutlined" variant="primary" />}
        />
      </Flex>
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
