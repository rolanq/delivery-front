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

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
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

export type Mutation = {
  __typename?: 'Mutation';
  signIn?: Maybe<AuthPayload>;
  signUp?: Maybe<AuthPayload>;
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
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

export type SignUpMutationVariables = Exact<{
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: string, name: string, phone?: string | null, email?: string | null } | null } | null };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: string, name: string, phone?: string | null, email?: string | null } | null } | null };

export type GetRestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRestaurantsQuery = { __typename?: 'Query', getRestaurants?: Array<{ __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, image?: string | null } | null> | null };

export type GetRestuarantQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRestuarantQuery = { __typename?: 'Query', getRestuarant?: { __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, address: string, description: string, startWorkingDay: string, endWorkingDay: string, image?: string | null, MenuCategories?: Array<{ __typename?: 'MenuCategory', id: string, name: string, MenuItems?: Array<{ __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null } | null> | null } | null> | null } | null };


export const SignUpDocument = gql`
    mutation SignUp($name: String!, $phone: String, $password: String!, $email: String!) {
  signUp(name: $name, phone: $phone, password: $password, email: $email) {
    token
    user {
      id
      name
      phone
      email
    }
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(password: $password, email: $email) {
    token
    user {
      id
      name
      phone
      email
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
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