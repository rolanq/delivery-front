import { Content } from "antd/es/layout/layout";
import React, { FC } from "react";
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

  return (
    <Content
      className={styles.wrapper}
      ref={ref}
      style={{
        overflow: scrollable ? "scroll" : "hidden",
      }}
    >
      <div
        className={styles.content}
        style={{ paddingBottom: paddingVertical ? "64px" : 0 }}
      >
        {children}
      </div>
    </Content>
  );
};
