import { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { CustomText } from "../CustomText/CustomText";
import { Variants } from "../consts/variantTypes";
import { CustomIcon } from "../CustomIcon/CustomIcon";

interface IProps {
  className?: string;
  label?: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: Variants;
  labelPosition?: "left" | "center" | "right";
  fullWidth?: boolean;
  fullHeight?: boolean;
  path?: string;
  type?: "button" | "link";
  id?: string;
  loading?: boolean;
  disabled?: boolean;
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
  disabled,
  loading,
}) => {
  const navigate = useNavigate();

  const getOnClick = () => {
    if (disabled) return () => {};

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
        disabled ? styles.disabled : styles[variant],
        styles[labelPosition],
        fullWidth ? styles.fullWidth : styles.minWidth,
        fullHeight ? styles.fullHeight : styles.minHeight
      )}
      onClick={getOnClick()}
    >
      <CustomText className={styles.label} variant={variant}>
        {loading ? (
          <CustomIcon
            variant={disabled ? "primary" : variant}
            icon="LoadingOutlined"
          />
        ) : (
          label
        )}
      </CustomText>
    </Flex>
  );
};
