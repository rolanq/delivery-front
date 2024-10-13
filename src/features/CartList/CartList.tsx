import { useCartStore } from "@shared/stores/Cart";
import { useUserStore } from "@shared/stores/User";
import { Flex } from "antd";
import { useEffect } from "react";
import { CartCard } from "./CartCard/CartCard";
import {
  Cart,
  useGetCartLazyQuery,
  useGetMenuItemsLazyQuery,
} from "@graphql/index";

export const CartList = () => {
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const setIsLoading = useCartStore((state) => state.setLoading);

  const [getMenuItems] = useGetMenuItemsLazyQuery({
    onCompleted: (data) => {
      if (data.getMenuItems.length) {
        // setCartItems(data);
      }
    },
  });

  const [getCart] = useGetCartLazyQuery({
    onCompleted: (data) => {
      if (data.getCart?.cart?.length) {
        setCart(data.getCart as Cart);
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    if (!user?.id) {
      const prevCart = localStorage.getItem("ECart");
      const parsedPrevCart = prevCart ? JSON.parse(prevCart) : [];
      getMenuItems({ variables: { ids: parsedPrevCart } });
    } else {
      getCart({ variables: { userId: { id: user.id } } });
    }
  }, [user]);

  return (
    <Flex vertical gap="10px">
      {cart.cart?.length &&
        cart.cart?.map((cartItem) => <CartCard card={cartItem} />)}
    </Flex>
  );
};
