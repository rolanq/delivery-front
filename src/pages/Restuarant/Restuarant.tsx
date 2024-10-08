import { useGetRestuarantQuery } from "@graphql/graphql";
import { Layout } from "@shared/kit/Layout/Layout";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const Restuarant: FC = () => {
  const { id } = useParams();
  const { data } = useGetRestuarantQuery({
    variables: { id: id ?? "" },
  });

  console.log(data);

  return <Layout><></></Layout>;
};
