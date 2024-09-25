import { Route, Routes, useLocation } from "react-router-dom";
import { FC, useLayoutEffect, useState } from "react";
import { Restuarants } from "@pages/Retuarants/Restuarants";
import { ConfigProvider, Flex, Layout } from "antd";
import Title from "antd/es/typography/Title";
import { GlobalLoader } from "@features/GlobalLoader/GlobalLoader";

export const App: FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      <GlobalLoader isLoading={isLoading} />
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "'Noto Sans JP', sans-serif",
            fontWeightStrong: 800,
          },
        }}
      >
        <Routes>
          <Route index element={<Restuarants />} />
        </Routes>
      </ConfigProvider>
    </>
  );
};
