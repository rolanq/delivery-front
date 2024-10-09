import classNames from "classnames";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import goBackArrow from "@assets/arrow-left.svg";

interface IProps {
  classname?: string;
}

export const GoBackButton: FC<IProps> = ({ classname }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(classname, styles.goBackButtonWrapper)}
      onClick={() => navigate("/")}
    >
      <img src={goBackArrow} alt="goBackArrow" />
    </div>
  );
};
