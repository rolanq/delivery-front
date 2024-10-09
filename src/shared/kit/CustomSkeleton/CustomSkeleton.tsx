import { Skeleton } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export const CustomSkeleton: FC<IProps> = ({
  width = "100%",
  height = "100%",
  borderRadius = "10px",
  className,
}) => {
  return (
    <Skeleton.Node
      active
      style={{ width, height, borderRadius }}
      rootClassName={classNames(styles.skeleton, className)}
    />
  );
};
