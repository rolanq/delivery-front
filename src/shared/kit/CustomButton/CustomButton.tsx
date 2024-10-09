import { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {
  className?: string;
  label?: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary" | "transparent";
  labelPosition?: "left" | "center" | "right";
  fullWidth?: boolean;
  fullHeight?: boolean;
  path?: string;
  type?: "button" | "link";
  id?: string;
}

export const CustomButton: FC<IProps> = ({
  className,
  label,
  onClick,
  variant = "primary",
  labelPosition = "center",
  fullWidth = false,
  fullHeight = false,
  type = "button",
  path,
  id,
}) => {
  const navigate = useNavigate();

  const getOnClick = () => {
    if (type === "link" && path) {
      return () => navigate(path);
    } else if (type === "button" && onClick) {
      return onClick;
    }

    return () => {};
  };
  return (
    <Flex
      id={id}
      className={classNames(
        className,
        styles.container,
        styles[variant],
        styles[labelPosition],
        fullWidth ? styles.fullWidth : styles.minWidth,
        fullHeight ? styles.fullHeight : styles.minHeight
      )}
      onClick={getOnClick()}
    >
      <Typography.Text>{label}</Typography.Text>
    </Flex>
  );
};
