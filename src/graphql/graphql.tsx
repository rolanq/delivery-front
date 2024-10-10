import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type MenuCategory = {
  __typename?: 'MenuCategory';
  MenuItems?: Maybe<Array<Maybe<MenuItem>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getRestaurants?: Maybe<Array<Maybe<Restuarant>>>;
  getRestuarant?: Maybe<Restuarant>;
};


export type QueryGetRestuarantArgs = {
  id: Scalars['ID']['input'];
};

export type Restuarant = {
  __typename?: 'Restuarant';
  MenuCategories?: Maybe<Array<Maybe<MenuCategory>>>;
  address: Scalars['String']['output'];
  categories?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  endWorkingDay: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  startWorkingDay: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type GetRestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRestaurantsQuery = { __typename?: 'Query', getRestaurants?: Array<{ __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, image?: string | null } | null> | null };

export type GetRestuarantQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRestuarantQuery = { __typename?: 'Query', getRestuarant?: { __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, address: string, description: string, startWorkingDay: string, endWorkingDay: string, image?: string | null, MenuCategories?: Array<{ __typename?: 'MenuCategory', id: string, name: string, MenuItems?: Array<{ __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null } | null> | null } | null> | null } | null };


export const GetRestaurantsDocument = gql`
    query GetRestaurants {
  getRestaurants {
    id
    name
    rating
    categories
    image
  }
}
    `;

/**
 * __useGetRestaurantsQuery__
 *
 * To run a query within a React component, call `useGetRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRestaurantsQuery(baseOptions?: Apollo.QueryHookOptions<GetRestaurantsQuery, GetRestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(GetRestaurantsDocument, options);
      }
export function useGetRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRestaurantsQuery, GetRestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(GetRestaurantsDocument, options);
        }
export function useGetRestaurantsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRestaurantsQuery, GetRestaurantsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(GetRestaurantsDocument, options);
        }
export type GetRestaurantsQueryHookResult = ReturnType<typeof useGetRestaurantsQuery>;
export type GetRestaurantsLazyQueryHookResult = ReturnType<typeof useGetRestaurantsLazyQuery>;
export type GetRestaurantsSuspenseQueryHookResult = ReturnType<typeof useGetRestaurantsSuspenseQuery>;
export type GetRestaurantsQueryResult = Apollo.QueryResult<GetRestaurantsQuery, GetRestaurantsQueryVariables>;
export const GetRestuarantDocument = gql`
    query GetRestuarant($id: ID!) {
  getRestuarant(id: $id) {
    id
    name
    rating
    categories
    address
    description
    startWorkingDay
    endWorkingDay
    image
    MenuCategories {
      id
      name
      MenuItems {
        id
        name
        image
        description
        weight
        price
      }
    }
  }
}
    `;

/**
 * __useGetRestuarantQuery__
 *
 * To run a query within a React component, call `useGetRestuarantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestuarantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestuarantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRestuarantQuery(baseOptions: Apollo.QueryHookOptions<GetRestuarantQuery, GetRestuarantQueryVariables> & ({ variables: GetRestuarantQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRestuarantQuery, GetRestuarantQueryVariables>(GetRestuarantDocument, options);
      }
export function useGetRestuarantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRestuarantQuery, GetRestuarantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRestuarantQuery, GetRestuarantQueryVariables>(GetRestuarantDocument, options);
        }
export function useGetRestuarantSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRestuarantQuery, GetRestuarantQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRestuarantQuery, GetRestuarantQueryVariables>(GetRestuarantDocument, options);
        }
export type GetRestuarantQueryHookResult = ReturnType<typeof useGetRestuarantQuery>;
export type GetRestuarantLazyQueryHookResult = ReturnType<typeof useGetRestuarantLazyQuery>;
export type GetRestuarantSuspenseQueryHookResult = ReturnType<typeof useGetRestuarantSuspenseQuery>;
export type GetRestuarantQueryResult = Apollo.QueryResult<GetRestuarantQuery, GetRestuarantQueryVariables>;