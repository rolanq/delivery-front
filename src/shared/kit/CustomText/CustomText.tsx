import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import React, { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

const colors = {
    primary: "black",
    secondary: "white",
    tertiary: "#b0b0b0",
    fourth: "#c23b22"
}

interface IProps {
  variant?: "primary" | "secondary" | "tertiary" | "fourth";
  size?: "sm" | "md" | "lg";
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  marginBottom?: boolean;
  marginTop?: boolean;
  children?: React.ReactNode;
  classname?: string;
}

export const CustomText: FC<IProps> = ({
  children,
  size = "md",
  titleLevel,
  variant = "primary",
  marginBottom,
  marginTop,
  classname,
}) => {
  if (titleLevel) {
    return (
      <Title
        className={classNames(styles[variant], classname)}
        level={titleLevel}
        style={{
          marginBottom: marginBottom ? "10px" : 0,
          marginTop: marginTop ? "10px" : 0,
          color: colors[variant]
        }}
      >
        {children}
      </Title>
    );
  }

  return (
    <Text
      className={classNames(styles[size], styles[variant], classname)}
      style={{
        marginBottom: marginBottom ? "10px" : 0,
        marginTop: marginTop ? "10px" : 0,
      }}
    >
      {children}
    </Text>
  );
};
