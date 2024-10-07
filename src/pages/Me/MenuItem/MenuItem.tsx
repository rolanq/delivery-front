import { Flex, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface IProps {
  path: string;
  name: string;
}

export const MenuItem: FC<IProps> = ({ name, path }) => {
  return (
    <Link to={path}>
      <Flex className={styles.container}>
        <Typography>{name}</Typography>
      </Flex>
    </Link>
  );
};
