import { Content } from "antd/es/layout/layout";
import React, { FC, useEffect } from "react";
import styles from "./styles.module.css";
import { usePreventCollapse } from "@shared/hooks/usePreventCollapse";

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
  const ref = usePreventCollapse();

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
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
      <div>{children}</div>
    </Content>
  );
};
