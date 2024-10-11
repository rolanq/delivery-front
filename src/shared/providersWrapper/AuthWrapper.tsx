import { useGetUserQuery } from "@graphql/graphql";
import { useUserStore } from "@shared/stores/User";
import React, { FC } from "react";

interface IProps {
  children?: React.ReactNode;
}

export const AuthWrapper: FC<IProps> = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const token = localStorage.getItem("token");

  useGetUserQuery({
    variables: { token: token ?? "" },
    skip: !token,
    onCompleted: (data) => {
      if (data.getUser) {
        setUser(data.getUser);
      }
    },
  });

  return <>{children}</>;
};
