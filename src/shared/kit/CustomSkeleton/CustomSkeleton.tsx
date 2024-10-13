import { Skeleton } from "antd";
import React, { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
  withMarginBottom?: boolean;
  style?: React.CSSProperties;
}

export const CustomSkeleton: FC<IProps> = ({
  width = "100%",
  height = "100%",
  borderRadius = "10px",
  withMarginBottom = true,
  className,
  style
}) => {
  return (
    <Skeleton.Node
      active
      style={{
        width,
        height,
        borderRadius,
        marginBottom: withMarginBottom ? "10px" : 0,
        ...style
      }}
      rootClassName={classNames(styles.skeleton, className)}
    />
  );
};
