import { Flex, List } from "antd";
import { FC, useMemo } from "react";
import { RestuarantCard } from "./RestuarantCard/RestuarantCard";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { useGetRestaurantsQuery } from "@graphql/graphql";
import { useIsMobile } from "@shared/hooks/useIsMobile";

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
  const { data, loading: isLoading } = useGetRestaurantsQuery();
  const isMobile = useIsMobile();

  if (isLoading) {
    return <SkeletonRestuarantList />;
  }

  return (
    <List dataSource={data?.getRestaurants ?? []} renderItem={(restuarant) => <RestuarantCard restuarant={restuarant} />}>
    </List>
  );
};
