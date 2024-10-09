import { FC } from "react";
import styles from "./styles.module.css";
import { Flex, Typography } from "antd";
import classNames from "classnames";

interface IProps {
  src?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const CustomImage: FC<IProps> = ({
  src,
  width = "100%",
  height = "200px",
  className,
}) => {
  return (
    <Flex
      align="center"
      justify="center"
      className={classNames(styles.imageWrapper, className)}
      style={{ width, height }}
    >
      {src ? (
        <img src={src} className={styles.image} />
      ) : (
        <Typography>Картинки нет</Typography>
      )}
    </Flex>
  );
};
