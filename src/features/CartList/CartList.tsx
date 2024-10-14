import { useCartStore } from "@shared/stores/Cart";
import { useUserStore } from "@shared/stores/User";
import { Flex } from "antd";
import { useEffect } from "react";
import { CartCard } from "./CartCard/CartCard";
import { useGetCartLazyQuery } from "@graphql/index";

export const CartList = () => {
  const user = useUserStore((state) => state.user);
  const cart = useCartStore((state) => state.cart);
  const setCart = useCartStore((state) => state.setCart);
  const setIsLoading = useCartStore((state) => state.setLoading);

  const [getCart] = useGetCartLazyQuery({
    onCompleted: (data) => {
      if (data.getCart) {
        setCart(data.getCart);
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    if (user?.id) {
      getCart({ variables: { userId: { id: user.id } } });
    }
  }, [user]);

  return (
    <Flex vertical gap="10px">
      {cart?.cart?.length &&
        cart.cart?.map((cartItem) => (
          <CartCard key={cartItem?.menuItem?.id} card={cartItem} />
        ))}
    </Flex>
  );
};
