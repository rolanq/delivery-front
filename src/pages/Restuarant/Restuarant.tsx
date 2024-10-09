import {
  Restuarant as RestuarantType,
  useGetRestuarantQuery,
} from "@graphql/graphql";
import { Layout } from "@shared/kit/Layout/Layout";
import { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { Flex } from "antd";
import { useRestuarantStore } from "@shared/stores/Restuarant";
import { RestuarantSkeleton } from "@features/Restuarant/RestuarantSkeleton/RestuarantSkeleton";
import { RestuarantHeader } from "@features/Restuarant/RestuarantHeader/RestuarantHeader";
import { Menu } from "@features/Menu/Menu";

export const Restuarant: FC = () => {
  const { id } = useParams();

  const setRestuarant = useRestuarantStore((state) => state.setRestuarant);

  const { loading: isLoading } = useGetRestuarantQuery({
    variables: { id: id ?? "" },
    onCompleted(data) {
      setRestuarant(data.getRestuarant as RestuarantType);
    },
  });

  if (isLoading) {
    return <RestuarantSkeleton />;
  }

  return (
    <Layout
      goBackButton
      goBackButtonClassName={styles.goBackButton}
      scrollable
      horizontalPadding={false}
    >
      <RestuarantHeader />
      <Flex vertical className={styles.content}>
        <Menu />
      </Flex>
    </Layout>
  );
};
