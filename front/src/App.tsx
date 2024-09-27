import { Route, Routes, useLocation } from "react-router-dom";
import { FC, useLayoutEffect, useState } from "react";
import { Restuarants } from "@pages/Retuarants/Restuarants";
import { ConfigProvider } from "antd";
import { GlobalLoader } from "@features/GlobalLoader/GlobalLoader";
import { Footer } from "@features/Footer/Footer";

export const App: FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
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
      <Footer />
      {isLoading && <GlobalLoader />}
    </>
  );
};
