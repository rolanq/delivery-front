import { Footer as FooterAnt } from "antd/es/layout/layout";
import React, { FC } from "react";
import styles from "./styles.module.css";
import { Flex } from "antd";
import { NavLink } from "react-router-dom";
import { FooterRoutes } from "@shared/routes/routes";
import classNames from "classnames";
import { CustomText } from "@shared/kit/CustomText/CustomText";

interface IProps {
  customFooter?: React.ReactNode;
  footerHeight?: string;
}

export const Footer: FC<IProps> = ({ customFooter, footerHeight }) => {
  return (
    <FooterAnt className={styles.wrapper} style={{ height: footerHeight ? footerHeight : "64px" }}>
      <Flex
        className={classNames(
          styles.container,
          customFooter && styles.customFooter
        )}
      >
        {customFooter
          ? customFooter
          : FooterRoutes.map((route) => (
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
                <Flex vertical gap="5px" align="center" className={styles.icon}>
                  <route.icon />
                  <CustomText size="sm">{route.name}</CustomText>
                </Flex>
              </NavLink>
            ))}
      </Flex>
    </FooterAnt>
  );
};
