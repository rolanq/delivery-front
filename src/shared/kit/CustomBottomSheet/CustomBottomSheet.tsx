import React, { FC } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styles from "./styles.module.css";
import "react-spring-bottom-sheet/dist/style.css";
import "./override.css";
import { CloseOutlined } from "@ant-design/icons";

interface IProps {
  open: boolean;
  onDismiss: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  snap?: number;
}

export const CustomBottomSheet: FC<IProps> = ({
  open,
  onDismiss,
  children,
  footer,
  snap = 30
}) => {
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  return (
    <BottomSheet
      footer={footer}
      scrollLocking
      expandOnContentDrag
      defaultSnap={(viewportHeight / 100) * 80}
      snapPoints={() => [
        (viewportHeight / 100) * snap,
      ]}
      maxHeight={(viewportHeight / 100) * 80}
      open={open}
      onDismiss={onDismiss}
    >
      <CloseOutlined className={styles.closeButton} onClick={onDismiss} />
      {children}
    </BottomSheet>
  );
};
