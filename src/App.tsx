import { Route, Routes, useLocation } from "react-router-dom";
import { FC, useLayoutEffect } from "react";
import {
  GlobalLoader,
  GlobalLoaderWrapper,
} from "@features/GlobalLoader/GlobalLoader";
import { ROUTES } from "@shared/routes/routes";
import { ProvidersWrapper } from "@shared/providersWrapper/ProvidersWrapper";
import { useIsMobile } from "@shared/hooks/useIsMobile";

export const App: FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const w: any = window;

    if (w.visualViewport) {
      w.visualViewport.addEventListener("resize", () => {
        document.body.style.height = w.visualViewport.height + "px";
      });
    }
  }, [location.pathname]);

  if (!isMobile) {
    return <GlobalLoader error="Приложение доступно только с мобильных устройств" />;
  }

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
        <GlobalLoaderWrapper>
          <GlobalLoader />
        </GlobalLoaderWrapper>
      </ProvidersWrapper>
    </>
  );
};
