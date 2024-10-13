import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

export const CartSkeleton = () => {
  return (
    <>
      <CustomSkeleton height={"150px"} width={"100%"} />
      <CustomSkeleton height={"150px"} width={"100%"} />
      <CustomSkeleton height={"150px"} width={"100%"} />
      <CustomSkeleton height={"150px"} width={"100%"} />
    </>
  );
};
