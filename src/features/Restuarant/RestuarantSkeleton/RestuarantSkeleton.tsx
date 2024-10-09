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
        <Flex vertical className={styles.skeletonContent}>
          <Flex gap="10px">
            <CustomSkeleton width="100%" height="150px" />
            <CustomSkeleton width="100%" height="150px" />
          </Flex>
          <Flex gap="10px">
            <CustomSkeleton width="100%" height="150px" />
            <CustomSkeleton width="100%" height="150px" />
          </Flex>
          <Flex gap="10px">
            <CustomSkeleton width="100%" height="150px" />
            <CustomSkeleton width="100%" height="150px" />
          </Flex>
          <Flex gap="10px">
            <CustomSkeleton width="100%" height="150px" />
            <CustomSkeleton width="100%" height="150px" />
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};
