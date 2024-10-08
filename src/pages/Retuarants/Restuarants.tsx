import { FC, useState } from "react";
import Title from "antd/es/typography/Title";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Flex } from "antd";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Layout } from "@shared/kit/Layout/Layout";

export const Restuarants: FC = () => {
  const [isLoading] = useState(false);

  return (
    <Layout footer paddingVertical>
      <Flex justify="space-between">
        {isLoading ? (
          <CustomSkeleton height={"30px"} width={"60%"} />
        ) : (
          <Title level={2}>Рестораны</Title>
        )}
      </Flex>

      <RestuarantsList isLoading={isLoading} />
    </Layout>
  );
};
