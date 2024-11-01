import {
  AppstoreOutlined,
  HomeOutlined,
  MenuOutlined,
  MessageOutlined,
  SettingOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CartIcon } from "@features/Footer/CartIcon/CartIcon";
import { AdminMainPage } from "@pages/AdminMainPage/AdminMainPage";
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
  icon?: any;
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
  { path: "*", element: ErrorPage },
];

export const FooterRoutes = [
  {
    icon: AppstoreOutlined,
    to: "/",
    name: "Рестораны",
  },
  { icon: CartIcon, to: "/cart", name: "Корзина" },
  { icon: UserOutlined, to: "/me", name: "Я" },
];

export const ADMIN_ROUTES: Route[] = [
  {
    element: AdminMainPage,
    path: "/",
    name: "Главная",
  },
  {
    element: AdminMainPage,
    path: "/requests",
    name: "Запросы",
  },
  {
    element: AdminMainPage,
    path: "/orders",
    name: "Заказы",
  },
  {
    element: AdminMainPage,
    path: "/menu",
    name: "Меню ресторана",
  },
  {
    element: AdminMainPage,
    path: "/settings",
    name: "Настройки ресторана",
  },
];
