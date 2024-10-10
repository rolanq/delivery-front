import { FC } from "react";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Layout } from "@shared/kit/Layout/Layout";
import { useRestuarantsStore } from "@shared/stores/Restuarants";
import { useGetRestaurantsQuery, Restuarant } from "@graphql/graphql";

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
    <Layout
      header
      footer
      paddingVertical
      isLoading={!restuarants.length}
      title={"Рестораны"}
    >
      <RestuarantsList />
    </Layout>
  );
};
