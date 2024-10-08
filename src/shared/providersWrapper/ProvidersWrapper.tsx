import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { SDKProvider } from "@telegram-apps/sdk-react";
import { ConfigProvider } from "antd";
import React, { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const apiUrl = import.meta.env.VITE_MAINTENCE === "production" ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_URL_DEV

export const ProvidersWrapper: FC<IProps> = ({ children }) => {
  const client = new ApolloClient({
    uri: `${apiUrl}/api/graphql`,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <SDKProvider acceptCustomStyles>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "'Noto Sans JP', sans-serif",
              fontWeightStrong: 800,
            },
            components: {
              Typography: {
                "colorTextSecondary": "white"
              }
            }
          }}
        >
          {children}
        </ConfigProvider>
      </SDKProvider>
    </ApolloProvider>
  );
};
