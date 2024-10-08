import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {
  className?: string;
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  labelPosition?: "left" | "center" | "right";
  fullWidth?: boolean;
  path?: string;
  type?: "button" | "link";
}

export const CustomButton: FC<IProps> = ({
  className,
  label,
  onClick,
  variant = "primary",
  labelPosition = "center",
  fullWidth = false,
  type = "button",
  path,
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
      className={classNames(
        className,
        styles.container,
        styles[variant],
        styles[labelPosition],
        fullWidth ? styles.fullWidth : styles.minWidth
      )}
      onClick={getOnClick()}
    >
      <Typography.Text>{label}</Typography.Text>
    </Flex>
  );
};
