import { Footer } from "@features/Footer/Footer";
import { NavBar } from "@features/NavBar/NavBar";
import React, { FC } from "react";
import { Page } from "../Page/Page";
import styles from "./styles.module.css";
import goBackArrow from "@assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";

interface IProps {
  header?: boolean;
  footer?: boolean;
  paddingVertical?: boolean;
  goBackButton?: boolean;
  children: React.ReactNode;
}

export const Layout: FC<IProps> = ({
  footer,
  header,
  paddingVertical,
  goBackButton,
  children,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {header && <NavBar />}
      <Page paddingVertical={paddingVertical}>
        {goBackButton && (
          <div className={styles.goBackButtonWrapper} onClick={() => navigate('/')}>
            <img src={goBackArrow} alt="goBackArrow" />
          </div>
        )}
        {children}
      </Page>
      {footer && <Footer />}
    </>
  );
};
