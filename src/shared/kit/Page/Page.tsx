import { Content } from "antd/es/layout/layout";
import React, { FC } from "react";
import styles from "./styles.module.css";
import { usePreventCollapse } from "@shared/hooks/usePreventCollapse";
import { CustomText } from "../CustomText/CustomText";
import { CustomSkeleton } from "../CustomSkeleton/CustomSkeleton";

interface IProps {
  children?: React.ReactNode;
  paddingVertical?: boolean;
  horizontalPadding?: boolean;
  scrollable?: boolean;
  paddingTopWithHeader?: boolean;
  title?: React.ReactNode;
  isLoading?: boolean;
}

export const Page: FC<IProps> = ({
  children,
  paddingVertical,
  horizontalPadding,
  scrollable = true,
  paddingTopWithHeader = false,
  isLoading,
  title,
}) => {
  const ref = usePreventCollapse();

  return (
    <Content className={styles.wrapper} ref={ref}>
      <div
        className={styles.content}
        id="scrollable_content"
        style={{
          paddingBottom: paddingVertical ? "64px" : 0,
          paddingTop: paddingVertical
            ? paddingTopWithHeader
              ? "64px"
              : "20px"
            : 0,
          paddingLeft: horizontalPadding ? "20px" : 0,
          paddingRight: horizontalPadding ? "20px" : 0,
          overflow: scrollable ? "auto" : "hidden",
        }}
      >
        {title ? (
          isLoading ? (
            <CustomSkeleton height={"30px"} width={"150px"} />
          ) : (
            <CustomText titleLevel={2} marginBottom>
              {title}
            </CustomText>
          )
        ) : null}
        {children}
      </div>
    </Content>
  );
};
