import {
  GlobalLoaderWrapper,
  GlobalLoader,
} from "@features/GlobalLoader/GlobalLoader";
import { useIsMainApp } from "@shared/hooks/useIsAdmin";
import { ADMIN_ROUTES, ROUTES } from "@shared/routes/routes";
import { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AppModules = {
  admin: ADMIN_ROUTES,
  main: ROUTES,
};

export const AppRoutes = () => {
  const isMainApp = useIsMainApp();
  const location = useLocation();

  const [appModule, setAppModule] = useState<keyof typeof AppModules>("main");

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const w: any = window;

    if (w.visualViewport) {
      w.visualViewport.addEventListener("resize", () => {
        document.body.style.height = w.visualViewport.height + "px";
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (isMainApp) {
      setAppModule("main");
    } else {
      setAppModule("admin");
    }
  }, [isMainApp]);

  return (
    <>
      <Routes>
        {AppModules[appModule].map((route) => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      <GlobalLoaderWrapper>
        <GlobalLoader />
      </GlobalLoaderWrapper>
    </>
  );
};
