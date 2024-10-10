import { Flex } from "antd";
import React, { FC } from "react";
import styles from "./styles.module.css";
import * as Icons from "@ant-design/icons/lib/icons";
import classNames from "classnames";

type IconsNames = keyof typeof Icons;

const sizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

interface IProps {
  size?: "sm" | "md" | "lg";
  icon: IconsNames;
  className?: string;
}

export const CustomIcon: FC<IProps> = ({ size = "md", icon, className }) => {
  const Iconed = Icons[icon];
  return (
    <Iconed
      className={classNames(styles.icon, className)}
      style={{ color: "black", width: sizes[size], height: sizes[size] }}
    />
  );
};
