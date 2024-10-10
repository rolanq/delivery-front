import classNames from "classnames";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { CustomIcon } from "@shared/kit/CustomIcon/CustomIcon";

interface IProps {
  className?: string;
}

export const GoBackButton: FC<IProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames(className, styles.goBackButtonWrapper)}
      onClick={() => navigate("/")}
    >
      <CustomIcon size="md" icon="ArrowLeftOutlined" />
    </div>
  );
};
