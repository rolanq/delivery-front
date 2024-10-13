import { Footer } from "@features/Footer/Footer";
import React, { FC } from "react";
import { Page } from "../Page/Page";
import { Header } from "@features/Header/Header";
import { GoBackButton } from "@features/GoBackButton/GoBackButton";

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
}) => {
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
      >
        {goBackButton && <GoBackButton className={goBackButtonClassName} />}
        {children}
      </Page>
      {footer && <Footer customFooter={customFooter} />}
    </>
  );
};
