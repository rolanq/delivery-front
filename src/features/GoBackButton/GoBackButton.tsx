import classNames from "classnames";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";

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
      <ArrowLeftOutlined className={styles.arrow}  />
    </div>
  );
};
