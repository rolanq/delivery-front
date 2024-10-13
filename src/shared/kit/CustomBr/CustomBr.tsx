import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  className?: string;
  width?: string;
}

export const CustomBr: FC<IProps> = ({ className, width = "100%" }) => {
  return <div className={classNames(className, styles.br)} style={{ width }} />;
};
