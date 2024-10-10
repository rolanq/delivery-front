import { FC } from "react";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Flex } from "antd";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Layout } from "@shared/kit/Layout/Layout";
import { useRestuarantsStore } from "@shared/stores/Restuarants";
import { useGetRestaurantsQuery, Restuarant } from "@graphql/graphql";
import { CustomText } from "@shared/kit/CustomText/CustomText";
import styles from './styles.module.css'

export const Restuarants: FC = () => {
  const restuarants = useRestuarantsStore((state) => state.restuarants);
  const setRestuarants = useRestuarantsStore((state) => state.setRestuarants);

  const {} = useGetRestaurantsQuery({
    onCompleted: (data) => {
      if (data.getRestaurants?.length) {
        setRestuarants([...data.getRestaurants] as Restuarant[]);
      }
    },
  });

  return (
    <Layout header footer paddingVertical>
      <Flex justify="space-between" className={styles.mb}>
        {!restuarants.length ? (
          <CustomSkeleton height={"30px"} width={"60%"} />
        ) : (
          <CustomText titleLevel={2}>Рестораны</CustomText>
        )}
      </Flex>
      <RestuarantsList />
    </Layout>
  );
};
