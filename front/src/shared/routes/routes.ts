import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { Restuarants } from "@pages/Retuarants/Restuarants";
import { FC } from "react";

export interface Route {
  index?: boolean;
  path: string;
  name?: string;
  element: FC;
}

export const ROUTES: Route[] = [
  {
    index: true,
    path: "/",
    element: Restuarants,
  },
  {
    path: "/r/:id",
    element: ErrorPage,
  },
  {
    path: "/cart",
    element: ErrorPage,
  },
  {
    path: "/me",
    element: ErrorPage,
  },
];

export const FooterRoutes = [
  {
    icon: AppstoreOutlined,
    to: "/",
    name: "Рестораны",
  },
  { icon: ShoppingCartOutlined, to: "/cart", name: "Корзина" },
  { icon: UserOutlined, to: "/me", name: "Я" },
];
