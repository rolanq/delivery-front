import { Content } from "antd/es/layout/layout";
import React, { FC } from "react";
import styles from "./styles.module.css";
import { usePreventCollapse } from "@shared/hooks/usePreventCollapse";
import { CustomText } from "../CustomText/CustomText";
import { CustomSkeleton } from "../CustomSkeleton/CustomSkeleton";
import { useIsMobile } from "@shared/hooks/useIsMobile";

interface IProps {
  children?: React.ReactNode;
  paddingVertical?: boolean;
  horizontalPadding?: boolean;
  scrollable?: boolean;
  paddingTopWithHeader?: boolean;
  title?: React.ReactNode;
  isLoading?: boolean;
  sidebar?: boolean;
}

export const Page: FC<IProps> = ({
  children,
  paddingVertical,
  horizontalPadding,
  scrollable = true,
  paddingTopWithHeader = false,
  isLoading,
  title,
  sidebar = false,
}) => {
  const ref = usePreventCollapse();
  const isMobile = useIsMobile();

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
          paddingLeft: sidebar ? "200px" : horizontalPadding ? "20px" : 0,
          paddingRight: horizontalPadding ? "20px" : 0,
          overflow: scrollable ? "auto" : "hidden",
          maxWidth: isMobile ? "820px" : "100vw",
        }}
      >
        {title ? (
          isLoading ? (
            <CustomSkeleton
              className={styles.title}
              height={"30px"}
              width={"150px"}
            />
          ) : (
            <CustomText titleLevel={2} marginBottom className={styles.title}>
              {title}
            </CustomText>
          )
        ) : null}
        {children}
      </div>
    </Content>
  );
};
