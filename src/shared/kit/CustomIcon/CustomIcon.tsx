import { FC } from "react";
import styles from "./styles.module.css";
import * as Icons from "@ant-design/icons/lib/icons";
import classNames from "classnames";
import { colors } from "../consts/colors";
import { Variants } from "../consts/variantTypes";

type IconsNames = keyof typeof Icons;

interface IProps {
  size?: "sm" | "md" | "lg";
  icon: IconsNames;
  className?: string;
  variant?: Variants;
}

export const CustomIcon: FC<IProps> = ({
  size = "md",
  icon,
  className,
  variant = "primary",
}) => {
  const Iconed = Icons[icon];
  return (
    <Iconed
      className={classNames(styles.icon, styles[size], className)}
      style={{
        color: colors[variant],
      }}
    />
  );
};
