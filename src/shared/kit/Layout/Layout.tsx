import { Footer } from "@features/Footer/Footer";
import React, { FC } from "react";
import { Page } from "../Page/Page";
import { Header } from "@features/Header/Header";
import { GoBackButton } from "@features/GoBackButton/GoBackButton";
import { useIsMainApp } from "@shared/hooks/useIsAdmin";
import { NavSideBarAdmin } from "@features/NavSideBarAdmin/NavSideBarAdmin";

interface IProps {
  customFooter?: React.ReactNode;
  header?: boolean;
  footer?: boolean;
  paddingVertical?: boolean;
  horizontalPadding?: boolean;
  scrollable?: boolean;
  goBackButton?: boolean;
  goBackButtonClassName?: string;
  title?: React.ReactNode;
  isLoading?: boolean;
  children: React.ReactNode;
  footerHeight?: string;
  adminSideBar?: boolean;
}

export const Layout: FC<IProps> = ({
  footer,
  header,
  paddingVertical = false,
  horizontalPadding = true,
  scrollable = true,
  goBackButton,
  isLoading,
  title,
  goBackButtonClassName,
  children,
  customFooter,
  footerHeight,
  adminSideBar = false,
}) => {
  const isMainApp = useIsMainApp();
  return (
    <>
      {header && <Header />}
      <Page
        paddingVertical={paddingVertical}
        horizontalPadding={horizontalPadding}
        scrollable={scrollable}
        paddingTopWithHeader={header || goBackButton}
        isLoading={isLoading}
        title={title}
        sidebar={!isMainApp && adminSideBar}
      >
        {goBackButton && <GoBackButton className={goBackButtonClassName} />}
        {children}
      </Page>
      {!isMainApp && adminSideBar && <NavSideBarAdmin />}
      {footer && (
        <Footer customFooter={customFooter} footerHeight={footerHeight} />
      )}
    </>
  );
};
