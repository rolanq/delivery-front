import { Cart, useGetCartQuery, useGetUserQuery } from "@graphql/graphql";
import { useAppStore } from "@shared/stores/App";
import { useCartStore } from "@shared/stores/Cart";
import { useUserStore } from "@shared/stores/User";
import React, { FC, useEffect } from "react";

interface IProps {
  children?: React.ReactNode;
}

export const AuthWrapper: FC<IProps> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const triggerAuth = useAppStore((state) => state.triggerAuth);
  const triggerIntroduction = useAppStore((state) => state.triggerIntroduction);
  const setCart = useCartStore((state) => state.setCart);
  const setIsLoading = useCartStore((state) => state.setLoading);
  const isAppLoaded = useAppStore((state) => state.isLoaded);
  const token = localStorage.getItem("token");
  const authBottomSheet = localStorage.getItem("ABSShouldOpen");
  const introductionBottomSheet = localStorage.getItem("IBSShouldOpen");
  const isUserSetted = user?.name || user?.address || user?.phone;
  const currentDate = new Date();

  useGetUserQuery({
    variables: { token: token ?? "" },
    skip: !token || !!user?.id,
    onCompleted: (data) => {
      if (data.getUser) {
        setUser(data.getUser);
      }
    },
  });

  useGetCartQuery({
    skip: !user?.id,
    variables: {
      userId: {
        id: user?.id ?? "",
      },
    },
    onCompleted: (data) => {
      if (data.getCart?.cart?.length) {
        setCart(data.getCart as Cart);
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    if (!isAppLoaded) return;
    if (!!user?.id && isUserSetted) return;

    if (!introductionBottomSheet && !isUserSetted && !!user?.id) {
      triggerIntroduction(true);
    }

    if (introductionBottomSheet && !!user?.id) {
      const date = new Date(introductionBottomSheet);

      if (date < currentDate) {
        triggerIntroduction(true);
      }
    }

    if (!authBottomSheet) {
      triggerAuth(true);
    }

    if (authBottomSheet) {
      const date = new Date(authBottomSheet);

      if (date < currentDate) {
        triggerAuth(true);
      }
    }
  }, [authBottomSheet, currentDate, isAppLoaded, introductionBottomSheet, isUserSetted]);

  return <>{children}</>;
};
