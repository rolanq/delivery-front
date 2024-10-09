import React, { FC } from "react";
import styles from "./styles.module.css";
import { Header } from "antd/es/layout/layout";
import classNames from "classnames";
import { useIsScrolled } from "@shared/hooks/useIsScrolled";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const CustomHeader: FC<IProps> = ({ children, className }) => {
  const show = useIsScrolled();

  const cls = show ? styles.visible : styles.hidden;

  return (
    <Header className={classNames(styles.container, cls, className)}>
      {children}
    </Header>
  );
};
