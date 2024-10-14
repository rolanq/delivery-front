import React, { FC } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styles from "./styles.module.css";
import "react-spring-bottom-sheet/dist/style.css";
import "./override.css";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import { CustomButton } from "../CustomButton/CustomButton";
import classNames from "classnames";

interface IProps {
  open: boolean;
  onDismiss: () => void;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  snap?: number;
  footerWithoutBoxShadow?: boolean;
  closeIcon: boolean;
}

export const CustomBottomSheet: FC<IProps> = ({
  open,
  onDismiss,
  children,
  footer,
  snap = 30,
  footerWithoutBoxShadow,
  closeIcon = true
}) => {
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  return (
    <BottomSheet
      className={classNames(
        footerWithoutBoxShadow && styles.footerWithoutBoxShadow
      )}
      footer={footer}
      scrollLocking
      expandOnContentDrag
      defaultSnap={(viewportHeight / 100) * snap}
      snapPoints={() => [(viewportHeight / 100) * snap]}
      maxHeight={(viewportHeight / 100) * snap}
      open={open}
      onDismiss={onDismiss}
    >
      {closeIcon && <CustomButton
        className={styles.closeButton}
        onClick={onDismiss}
        label={<CustomIcon icon="CloseOutlined" size="sm" />}
      />}
      {children}
    </BottomSheet>
  );
};
