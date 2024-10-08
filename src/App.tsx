import { Route, Routes, useLocation } from "react-router-dom";
import { FC, useLayoutEffect } from "react";
import { GlobalLoader } from "@features/GlobalLoader/GlobalLoader";
import { ROUTES } from "@shared/routes/routes";
import { ProvidersWrapper } from "@shared/providersWrapper/ProvidersWrapper";

export const App: FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const w: any = window;
    w.Telegram.WebApp.setBackgroundColor("#FFF");

    if (w.visualViewport) {
      w.visualViewport.addEventListener("resize", () => {
        document.body.style.height = w.visualViewport.height + "px";
      });
    }
    w.addEventListener("scroll", () => {
      if (w.scrollY > 0) w.scrollTo(0, 0);
    });
  }, [location.pathname]);

  return (
    <>
      <ProvidersWrapper>
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
        <GlobalLoader />
      </ProvidersWrapper>
    </>
  );
};
