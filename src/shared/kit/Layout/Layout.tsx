import { Footer } from "@features/Footer/Footer";
import React, { FC } from "react";
import { Page } from "../Page/Page";
import { Header } from "@features/Header/Header";
import { GoBackButton } from "@features/GoBackButton/GoBackButton";

interface IProps {
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
}) => {
  return (
    <>
      {header && <Header />}
      <Page
        paddingVertical={paddingVertical}
        horizontalPadding={horizontalPadding}
        scrollable={scrollable}
        paddingTopWithHeader={header}
        isLoading={isLoading}
        title={title}
      >
        {goBackButton && <GoBackButton classname={goBackButtonClassName} />}
        {children}
      </Page>
      {footer && <Footer />}
    </>
  );
};
