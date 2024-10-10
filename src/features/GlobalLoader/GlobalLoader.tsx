import { Flex, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React, { FC } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { animated, useSpring } from "@react-spring/web";
import maskot from "@assets/maskot.png";
import { useIsMobile } from "@shared/hooks/useIsMobile";

interface IProps {
  children?: React.ReactNode;
}

export const GlobalLoaderWrapper: FC<IProps> = ({ children }) => {
  const [props] = useSpring(
    () => ({
      config: { duration: 250 },
      delay: 1000,
      from: { opacity: 1, zIndex: 10000 },
      to: {
        opacity: 0,
        zIndex: -100,
      },
    }),
    []
  );
  return (
    <animated.div
      className={classNames(styles.wrapper, styles.block)}
      style={props}
    >
      {children}
    </animated.div>
  );
};

interface IPropsLoader {
  error?: string;
}

export const GlobalLoader: FC<IPropsLoader> = ({ error }) => {
  const isMobile = useIsMobile();

  return (
    <Flex justify="center" align="center" className={styles.block}>
      <Flex vertical align="center" gap={isMobile ? 15 : 30}>
        <img
          src={maskot}
          alt="maskot"
          style={{ width: isMobile ? 100 : 200 }}
        />
        {!!error && (
          <Flex
            className={styles.errorBlock}
            align="center"
            vertical
            gap="25px"
          >
            <Title
              className={styles.text}
              level={isMobile ? 4 : 3}
              style={{ color: "#C23B22" }}
            >
              Ошибка
            </Title>
            <Typography>{error}</Typography>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
