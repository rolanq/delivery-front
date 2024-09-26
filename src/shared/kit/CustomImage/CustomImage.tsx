import { FC } from "react";
import styles from "./styles.module.css";
import { Flex, Typography } from "antd";

interface IProps {
  src?: string;
  width?: string | number;
}

export const CustomImage: FC<IProps> = ({ src, width = "100%" }) => {
  return (
    <Flex
      align="center"
      justify="center"
      className={styles.imageWrapper}
      style={{ width }}
    >
      {src ? (
        <img src={src} className={styles.image} />
      ) : (
        <Typography>Картинки нет</Typography>
      )}
    </Flex>
  );
};
