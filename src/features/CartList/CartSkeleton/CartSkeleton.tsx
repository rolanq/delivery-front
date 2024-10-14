import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";

export const CartSkeleton = () => {
  return (
    <>
      {new Array(8).fill("").map(() => (
        <CustomSkeleton height={"60px"} />
      ))}
    </>
  );
};
