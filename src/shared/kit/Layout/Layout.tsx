import { Footer } from "@features/Footer/Footer";
import React, { FC } from "react";
import { Page } from "../Page/Page";
import styles from "./styles.module.css";
import goBackArrow from "@assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Header } from "@features/Header/Header";

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
      >
        {goBackButton && (
          <div
            className={classNames(
              goBackButtonClassName,
              styles.goBackButtonWrapper
            )}
            onClick={() => navigate("/")}
          >
            <img src={goBackArrow} alt="goBackArrow" />
          </div>
        )}
        {children}
      </Page>
      {footer && <Footer />}
    </>
  );
};
