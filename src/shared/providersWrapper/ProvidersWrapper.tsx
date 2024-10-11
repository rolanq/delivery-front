import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ConfigProvider } from "antd";
import { setContext } from "@apollo/client/link/context";
import React, { FC } from "react";
import { Auth } from "@features/Auth/Auth";
import { Toaster } from "react-hot-toast";
import { AuthWrapper } from "./AuthWrapper";

interface IProps {
  children: React.ReactNode;
}

const apiUrl =
  import.meta.env.VITE_MAINTENCE === "production"
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_API_URL_DEV;

const httpLink = createHttpLink({
  uri: `${apiUrl}/api/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const ProvidersWrapper: FC<IProps> = ({ children }) => {
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AuthWrapper>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeightStrong: 800,
            },
            components: {
              Typography: {
                colorTextSecondary: "white",
              },
            },
          }}
        >
          {children}
          <Auth />
          <Toaster />
        </ConfigProvider>
      </AuthWrapper>
    </ApolloProvider>
  );
};
