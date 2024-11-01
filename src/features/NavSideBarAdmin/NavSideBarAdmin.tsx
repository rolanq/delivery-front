import { CustomText } from "@shared/kit/CustomText/CustomText";
import { ADMIN_ROUTES } from "@shared/routes/routes";
import { Flex } from "antd";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

export const NavSideBarAdmin = () => {
  return (
    <Flex vertical className={styles.sideBar}>
      <Flex align="center" className={styles.title}>
        <CustomText titleLevel={2}>EKEE</CustomText>
        <CustomText titleLevel={2} variant="fourth">
          R
        </CustomText>
      </Flex>
      <Flex vertical>
        {ADMIN_ROUTES.map((route) => (
          <NavLink
            key={route.name}
            to={route.path}
            className={({ isActive }) =>
              classNames(
                styles.sideBarItem,
                isActive ? styles.active : styles.notActive
              )
            }
          >
            <Flex gap="10px" className={styles.icon}>
              <CustomText titleLevel={5}>{route.name}</CustomText>
            </Flex>
          </NavLink>
        ))}
      </Flex>
    </Flex>
  );
};
