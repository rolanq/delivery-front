import { Flex, Typography } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

interface IProps {
  path: string;
  name: string;
  classname?: string;
}

export const MenuItem: FC<IProps> = ({ name, path, classname }) => {
  return (
    <Link to={path}>
      <Flex className={classNames(classname, styles.container)}>
        <Typography.Text>{name}</Typography.Text>
      </Flex>
    </Link>
  );
};
