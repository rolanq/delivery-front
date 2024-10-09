import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Header } from "antd/es/layout/layout";
import classNames from "classnames";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export const CustomHeader: FC<IProps> = ({ children, className }) => {
  const [lastPosition, setLastPosition] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const content = document.getElementById("scrollable_content");

    const handleScroll = () => {
      let scrolling = content?.scrollTop ?? 0;
      
      if (scrolling > lastPosition) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastPosition(scrolling);
    };

    content?.addEventListener("scroll", handleScroll, { capture: true });
    return () => {
      content?.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, [lastPosition]);

  const cls = show ? styles.visible : styles.hidden;

  return (
    <Header className={classNames(styles.container, cls, className)}>
      {children}
    </Header>
  );
};
