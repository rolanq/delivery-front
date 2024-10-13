import { Flex } from "antd";
import { FC } from "react";
import { Layout } from "@shared/kit/Layout/Layout";
import { CartList } from "@features/CartList/CartList";
import { useCartStore } from "@shared/stores/Cart";

export const Cart: FC = () => {
  const isLoading = useCartStore((state) => state.loading);

  return (
    <Layout footer paddingVertical isLoading={isLoading} title={"Корзина"}>
      <Flex justify="center" vertical>
        <CartList />
      </Flex>
    </Layout>
  );
};
