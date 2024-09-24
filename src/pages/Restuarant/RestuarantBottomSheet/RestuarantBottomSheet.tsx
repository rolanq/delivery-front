import React, { FC } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import styles from "./RestuarantBottomSheet.module.css";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RestuarantBottomSheet: FC<IProps> = (props) => {
  const { setOpen } = props;
  return (
    <BottomSheet open className={styles.bottomSheetOpen} scrollLocking>
      <div
        className={styles.bottomSheetOverlay}
        onClick={() => setOpen(false)}
      />
      <div className={styles.bottomSheet}>
        <h2>Текущие условия</h2>
      </div>
    </BottomSheet>
  );
};
