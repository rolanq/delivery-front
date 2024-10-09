import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { animated, useSpring } from "@react-spring/web";

interface IProps {}

export const GlobalLoader: FC<IProps> = () => {
  const [props] = useSpring(
    () => ({
      config: { duration: 250 },
      delay: 1000,
      from: { opacity: 1, zIndex: 10000 },
      to: {
        opacity: 0,
        zIndex: -100
      },
    }),
    []
  );

  return (
    <animated.div
      className={classNames(styles.wrapper, styles.block)}
      style={props}
    >
      <Flex justify="center" align="center" className={styles.block}>
        <Title className={styles.text}>EKEE</Title>
        <Title className={styles.text} style={{ color: "#C23B22" }}>
          R
        </Title>
      </Flex>
    </animated.div>
  );
};
