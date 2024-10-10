import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  classname?: string;
}

export const CustomBr: FC<IProps> = ({ classname }) => {
  return <div className={classNames(classname, styles.br)} />;
};
