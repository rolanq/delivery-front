import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  className?: string;
}

export const CustomBr: FC<IProps> = ({ className }) => {
  return <div className={classNames(className, styles.br)} />;
};
