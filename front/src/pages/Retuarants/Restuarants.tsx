import { FC, useState } from "react";
import Title from "antd/es/typography/Title";
import { NavBar } from "@features/NavBar/NavBar";
import { RestuarantsList } from "@features/RestuarantsList/RestuarantsList";
import { Flex } from "antd";
import { CustomSkeleton } from "@shared/kit/CustomSkeleton/CustomSkeleton";
import { Page } from "@shared/kit/Page/Page";

export const Restuarants: FC = () => {
  const [isLoading] = useState(false);

  return (
    <>
      <NavBar />
      <Page>
        <Flex justify="space-between">
          {isLoading ? (
            <CustomSkeleton height={"30px"} width={"60%"} />
          ) : (
            <Title level={2}>Рестораны</Title>
          )}
        </Flex>

        <RestuarantsList isLoading={isLoading} />
      </Page>
    </>
  );
};
