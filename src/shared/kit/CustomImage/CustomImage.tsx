import { FC } from "react";
import styles from "./styles.module.css";
import { Flex } from "antd";
import classNames from "classnames";
import { CustomText } from "../CustomText/CustomText";

interface IProps {
  src?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export const CustomImage: FC<IProps> = ({
  src,
  width = "100%",
  height = "200px",
  borderRadius = "24px",
  className,
}) => {
  return (
    <Flex
      align="center"
      justify="center"
      className={classNames(styles.imageWrapper, className)}
      style={{ width, height, borderRadius }}
    >
      {src ? (
        <img src={src} className={styles.image} style={{ borderRadius }} />
      ) : (
        <CustomText>Картинки нет</CustomText>
      )}
    </Flex>
  );
};
