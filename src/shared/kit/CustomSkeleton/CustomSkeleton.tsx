import { Skeleton } from "antd";
import React, { FC } from "react";
import styles from './styles.module.css'

interface IProps {
  width?: string | number;
  height?: string | number;
}

export const CustomSkeleton: FC<IProps> = ({ width = "100%", height = "100%" }) => {
  return (
    <Skeleton.Node
      active
      style={{ width, height, borderRadius: "10px" }}
      rootClassName={styles.width}
    />
  );
};
