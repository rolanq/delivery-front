import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import { ProvidersWrapper } from "@shared/providersWrapper/ProvidersWrapper";
import { AppRoutes } from "@features/AppRoutes/AppRoutes";
import { useIsMainApp } from "@shared/hooks/useIsAdmin";

export const App: FC = () => {
  const isMainApp = useIsMainApp();

  return (
    <>
      <BrowserRouter basename={isMainApp ? "" : "admin"}>
        <ProvidersWrapper>
          <AppRoutes />
        </ProvidersWrapper>
      </BrowserRouter>
    </>
  );
};
