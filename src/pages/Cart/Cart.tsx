import { Flex } from "antd";
import { FC } from "react";
import Title from "antd/es/typography/Title";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Layout } from "@shared/kit/Layout/Layout";

export const Cart: FC = () => {
  const isLoading = true;
  return (
    <Layout footer paddingVertical>
        <Title level={2}>Корзина</Title>
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
