import { useGetUserQuery } from "@graphql/graphql";
import { useAppStore } from "@shared/stores/App";
import { useUserStore } from "@shared/stores/User";
import React, { FC, useEffect } from "react";

interface IProps {
  children?: React.ReactNode;
}

export const AuthWrapper: FC<IProps> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const triggerAuthBottomSheet = useAppStore(
    (state) => state.triggerAuthBottomSheet
  );
  const isAppLoaded = useAppStore((state) => state.isLoaded);
  const token = localStorage.getItem("token");
  const authBottomSheet = localStorage.getItem("ABSShouldOpen");
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

  useEffect(() => {
    if (!isAppLoaded || user?.id) return;

    if (!authBottomSheet) {
      triggerAuthBottomSheet(true);
    }

    if (authBottomSheet) {
      const date = new Date(authBottomSheet);

      if (date < currentDate) {
        triggerAuthBottomSheet(true);
      }
    }
  }, [authBottomSheet, currentDate, isAppLoaded]);

  return <>{children}</>;
};
