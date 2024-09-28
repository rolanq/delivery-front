import { Route, Routes, useLocation } from "react-router-dom";
import { FC, useLayoutEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { GlobalLoader } from "@features/GlobalLoader/GlobalLoader";
import { Footer } from "@features/Footer/Footer";
import { ROUTES } from "@shared/routes/routes";
import { SDKProvider } from "@telegram-apps/sdk-react";

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
      <SDKProvider acceptCustomStyles debug>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeightStrong: 800,
            },
          }}
        >
          <Routes>
            {ROUTES.map((route) => (
              <>
                <Route
                  key={route.path}
                  index={route.index}
                  path={route.path}
                  element={<route.element />}
                />
              </>
            ))}
          </Routes>
        </ConfigProvider>
        <Footer />
        {isLoading && <GlobalLoader />}
      </SDKProvider>
    </>
  );
};
