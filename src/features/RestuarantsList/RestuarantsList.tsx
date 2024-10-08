import { Flex, List } from "antd";
import { FC } from "react";
import { RestuarantCard } from "./RestuarantCard/RestuarantCard";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { useRestuarantsStore } from "@shared/stores/Restuarants";

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

export const RestuarantsList: FC = () => {
  const restuarants = useRestuarantsStore((state) => state.restuarants);

  if (!restuarants.length) {
    return <SkeletonRestuarantList />;
  }

  return (
    <List
      dataSource={restuarants}
      renderItem={(restuarant) => (
        <RestuarantCard key={restuarant?.id} restuarant={restuarant} />
      )}
    />
  );
};
