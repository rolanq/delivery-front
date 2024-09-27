import { RESTUARANTS_MOCK } from "@shared/mock";
import { Flex } from "antd";
import { FC } from "react";
import { RestuarantCard } from "./RestuarantCard/RestuarantCard";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

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

export const RestuarantsList: FC<IProps> = ({ isLoading }) => {
  if (isLoading) {
    return <SkeletonRestuarantList />;
  }

  return (
    <Flex gap={"30px"} wrap >
      {RESTUARANTS_MOCK.map((restuarant) => (
        <RestuarantCard key={restuarant.id} restuarant={restuarant} />
      ))}
    </Flex>
  );
};
