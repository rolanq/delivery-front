import { Footer } from "@features/Footer/Footer";
import React, { FC } from "react";
import { Page } from "../Page/Page";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
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
  children: React.ReactNode;
}

export const Layout: FC<IProps> = ({
  footer,
  header,
  paddingVertical = false,
  horizontalPadding = true,
  scrollable = true,
  goBackButton,
  goBackButtonClassName,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {header && <Header />}
      <Page
        paddingVertical={paddingVertical}
        horizontalPadding={horizontalPadding}
        scrollable={scrollable}
        paddingTopWithHeader={header}
      >
        {goBackButton && <GoBackButton classname={goBackButtonClassName} />}
        {children}
      </Page>
      {footer && <Footer />}
    </>
  );
};
