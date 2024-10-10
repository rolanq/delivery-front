import { Flex } from "antd";
import { FC } from "react";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Layout } from "@shared/kit/Layout/Layout";
import { CustomText } from "@shared/kit/CustomText/CustomText";

export const Cart: FC = () => {
  const isLoading = true;
  return (
    <Layout footer paddingVertical>
        <CustomText titleLevel={2}>Корзина</CustomText>
        <Flex justify="center" vertical>
          {isLoading && (
            <>
              <CustomSkeleton height={"150px"} width={"100%"} />
              <CustomSkeleton height={"150px"} width={"100%"} />
              <CustomSkeleton height={"150px"} width={"100%"} />
              <CustomSkeleton height={"150px"} width={"100%"} />
            </>
          )}
        </Flex>
    </Layout>
  );
};
