import { Flex } from "antd";
import { FC } from "react";
import { RestuarantCard } from "./RestuarantCard/RestuarantCard";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { useGetRestaurantsQuery } from "@graphql/graphql";

interface IProps {
  isLoading: boolean;
}

const SkeletonRestuarantList = () => {
  return (
    <Flex vertical gap={"20px"}>
      {new Array(4).fill("").map(() => (
        <Flex vertical gap={"15px"}>
          <CustomSkeleton height={"200px"} />
          <CustomSkeleton height={"20px"} />
        </Flex>
      ))}
    </Flex>
  );
};

export const RestuarantsList: FC<IProps> = () => {
  const { data, loading } = useGetRestaurantsQuery();

  if (loading) {
    return <SkeletonRestuarantList />;
  }

  return (
    <Flex gap={"30px"} wrap>
      {data?.getRestaurants?.map((restuarant) => (
        <RestuarantCard key={restuarant?.id} restuarant={restuarant} />
      ))}
    </Flex>
  );
};
