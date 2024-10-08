import { Footer } from "@features/Footer/Footer";
import { NavBar } from "@features/NavBar/NavBar";
import React, { FC } from "react";
import { Page } from "../Page/Page";

interface IProps {
  header?: boolean;
  footer?: boolean;
  paddingVertical?: boolean;
  scrollable?: boolean;
  children: React.ReactNode;
}

export const Layout: FC<IProps> = ({
  footer,
  header,
  paddingVertical,
  scrollable,
  children,
}) => {
  return (
    <>
      {header && <NavBar />}
      <Page paddingVertical={paddingVertical} scrollable={scrollable}>{children}</Page>
      {footer && <Footer />}
    </>
  );
};
