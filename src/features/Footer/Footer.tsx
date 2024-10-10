import { Footer as FooterAnt } from "antd/es/layout/layout";
import { FC } from "react";
import styles from "./styles.module.css";
import { Flex } from "antd";
import { NavLink } from "react-router-dom";
import { FooterRoutes } from "@shared/routes/routes";
import classNames from "classnames";
import { CustomText } from "@shared/kit/CustomText/CustomText";

export const Footer: FC = () => {
  return (
    <FooterAnt className={styles.wrapper}>
      <Flex className={styles.container}>
        {FooterRoutes.map((route) => (
          <NavLink
            key={route.name}
            to={route.to}
            className={({ isActive }) =>
              classNames(
                styles.menuItem,
                isActive ? styles.active : styles.notActive
              )
            }
          >
            <Flex vertical gap="5px" align="center">
              <route.icon className={styles.icon} />
              <CustomText>{route.name}</CustomText>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </FooterAnt>
  );
};
