import { Flex, List } from "antd";
import { FC } from "react";
import { RestuarantCard } from "./RestuarantCard/RestuarantCard";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { useGetRestaurantsQuery } from "@graphql/graphql";

interface IProps {
  isLoading: boolean;
}

const SkeletonRestuarantList = () => {
  return (
    <Flex vertical gap={"10px"}>
      {new Array(4).fill("").map((_, i) => (
        <Flex vertical key={i}>
          <CustomSkeleton height={"200px"} />
          <CustomSkeleton height={"20px"} />
        </Flex>
      ))}
    </Flex>
  );
};

export const RestuarantsList: FC<IProps> = () => {
  const { data, loading: isLoading } = useGetRestaurantsQuery();
  
  if (isLoading) {
    return <SkeletonRestuarantList />;
  }

  return (
    <List
      dataSource={data?.getRestaurants ?? []}
      renderItem={(restuarant) => (
        <RestuarantCard key={restuarant?.id} restuarant={restuarant} />
      )}
    />
  );
};
