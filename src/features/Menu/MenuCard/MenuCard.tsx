import {
  MenuItem,
  useAddItemToCartMutation,
} from "@graphql/graphql";
import { Flex } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import { CustomImage } from "@shared/kit/CustomImage/CustomImage";
import { CustomButton } from "@shared/kit/CustomButton/CustomButton";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { useUserStore } from "@shared/stores/User";
import { useRestuarantStore } from "@shared/stores/Restuarant";
import { useCartStore } from "@shared/stores/Cart";
import { useAppStore } from "@shared/stores/App";

interface IProps {
  menuItem: MenuItem | null;
  onClick: (item: MenuItem | null) => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuCard: FC<IProps> = ({ menuItem, onClick, setModalOpen }) => {
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const restuarant = useRestuarantStore((state) => state.restuarant);
  const triggerAuth = useAppStore((state) => state.triggerAuth);

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
    </>
  );
};
