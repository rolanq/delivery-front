import { FC } from "react";
import Title from "antd/es/typography/Title";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Flex } from "antd";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Layout } from "@shared/kit/Layout/Layout";
import { useRestuarantsStore } from "@shared/stores/Restuarants";
import { useGetRestaurantsQuery, Restuarant } from "@graphql/graphql";

export const Restuarants: FC = () => {
  const restuarants = useRestuarantsStore((state) => state.restuarants);
  const setRestuarants = useRestuarantsStore((state) => state.setRestuarants);

  const {  } = useGetRestaurantsQuery({
    onCompleted: (data) => {
      if (data.getRestaurants?.length) {
        setRestuarants([...data.getRestaurants] as Restuarant[]);
      }
    },
  });

  return (
    <Layout footer paddingVertical>
      <Flex justify="space-between">
        {!restuarants.length ? (
          <CustomSkeleton height={"30px"} width={"60%"} />
        ) : (
          <Title level={2}>Рестораны</Title>
        )}
      </Flex>
      <RestuarantsList />
    </Layout>
  );
};
