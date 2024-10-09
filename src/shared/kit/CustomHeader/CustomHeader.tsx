import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "antd/es/layout/layout";
import classNames from "classnames";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const CustomHeader: FC<IProps> = ({ children, className }) => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  console.log(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position, window.pageYOffset]);

  const cls = visible ? styles.visible : styles.hidden;

  return (
    <Header className={classNames(styles.container, cls, className)}>
      {children}
    </Header>
  );
};
