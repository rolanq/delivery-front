import {
  AppstoreOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Login } from "@pages/Auth/Login/Login";
import { Cart } from "@pages/Cart/Cart";
import { ErrorPage } from "@pages/Error/ErrorPage";
import { Me } from "@pages/Me/Me";
import { Restuarant } from "@pages/Restuarant/Restuarant";
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
    element: Restuarant,
  },
  {
    path: "/cart",
    element: Cart,
  },
  {
    path: "/me",
    element: Me,
  },
  {
    path: "/login",
    element: Login
  },
  { path: "*", element: ErrorPage },
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
