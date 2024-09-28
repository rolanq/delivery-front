import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect } from "react";
import styles from "./styles.module.css";

interface IProps {
  children?: React.ReactNode;
  paddingVertical?: boolean;
  scrollable?: boolean;
}
export const Page: FC<IProps> = ({
  children,
  paddingVertical,
  scrollable = true,
}) => {
  useEffect(() => {
    if (!scrollable) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <Content
      className={styles.wrapper}
      style={{
        paddingTop: paddingVertical ? "20px" : 0,
        paddingBottom: paddingVertical ? "20px" : 0,
        overflow: scrollable ? "scroll" : "hidden",
      }}
    >
      {children}
    </Content>
  );
};
