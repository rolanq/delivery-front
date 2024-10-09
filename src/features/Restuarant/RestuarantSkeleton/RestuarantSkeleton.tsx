import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Layout } from "@shared/kit/Layout/Layout";
import { Flex } from "antd";
import styles from "./styles.module.css";

export const RestuarantSkeleton = () => {
  return (
    <Layout
      goBackButton
      scrollable={false}
      paddingVertical={false}
      horizontalPadding={false}
    >
      <CustomSkeleton width="100%" height="260px" />
      <Flex vertical className={styles.content}>
        <CustomSkeleton borderRadius="12px" width="100%" height="30px" />
        <Flex vertical className={styles.skeletonContent}>
          <CustomSkeleton width="250px" height="30px" />
          <Flex gap="10px">
            <CustomSkeleton borderRadius="24px" width="100%" height="250px" />
            <CustomSkeleton borderRadius="24px" width="100%" height="250px" />
          </Flex>
          <Flex gap="10px">
            <CustomSkeleton borderRadius="24px" width="100%" height="250px" />
            <CustomSkeleton borderRadius="24px" width="100%" height="250px" />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};
