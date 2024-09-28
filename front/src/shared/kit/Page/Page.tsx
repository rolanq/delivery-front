import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect } from "react";
import styles from "./styles.module.css";
import { usePreventCollapse } from "@shared/hooks/usePreventCollapse";
import { NavBar } from "@features/NavBar/NavBar";

interface IProps {
  children?: React.ReactNode;
  paddingVertical?: boolean;
  scrollable?: boolean;
  header?: boolean;
}
export const Page: FC<IProps> = ({
  children,
  paddingVertical,
  scrollable = true,
  header = false,
}) => {
  const ref = usePreventCollapse();

  return (
    <Content
      className={styles.wrapper}
      ref={ref}
      style={{
        paddingTop: paddingVertical ? "20px" : 0,
        paddingBottom: paddingVertical ? "20px" : 0,
        overflow: scrollable ? "scroll" : "hidden",
      }}
    >
      {header && <NavBar />}
      <div className={styles.content}>{children}</div>
    </Content>
  );
};
