import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";
import { Flex } from "antd";
import styles from "./styles.module.css";
import { useCartStore } from "@shared/stores/Cart";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

export const CartIcon = () => {
  const cartCount = useCartStore((state) => state.cart?.totalCount);
  const { pathname } = useLocation();
  const isActive = pathname === "/cart";
  const isShowDot = !isActive && !!cartCount;

  return (
    <Flex
      className={classNames(
        styles.container,
        isActive ? styles.activeSvg : styles.notActiveSvg
      )}
    >
      <CustomIcon icon="ShoppingCartOutlined" />
      {isShowDot && <div className={classNames(styles.countWrapper)} />}
    </Flex>
  );
};
