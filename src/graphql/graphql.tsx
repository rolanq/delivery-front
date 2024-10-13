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

export type AddItemToCartInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  menuItemId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Cart = {
  __typename?: 'Cart';
  cart?: Maybe<Array<Maybe<CartItem>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  count?: Maybe<Scalars['Int']['output']>;
  menuItem?: Maybe<MenuItem>;
};

export type DeleteCartItemsInput = {
  menuItemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type IDsInput = {
  id: Scalars['String']['input'];
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
  addItemToCart?: Maybe<Cart>;
  deleteCartItems?: Maybe<Cart>;
  signUp?: Maybe<SignUpPayload>;
  updateUser?: Maybe<AuthPayload>;
};


export type MutationAddItemToCartArgs = {
  data?: InputMaybe<AddItemToCartInput>;
};


export type MutationDeleteCartItemsArgs = {
  data?: InputMaybe<DeleteCartItemsInput>;
};


export type MutationSignUpArgs = {
  data?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<PartialUpdateUserInput>;
};

export type PartialUpdateUserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  verifyCode?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getCart?: Maybe<Cart>;
  getFavorites?: Maybe<Array<Maybe<Restuarant>>>;
  getMenuItems: Array<MenuItem>;
  getRestaurants?: Maybe<Array<Maybe<Restuarant>>>;
  getRestuarant: Restuarant;
  getUser: User;
};


export type QueryGetCartArgs = {
  userId?: InputMaybe<IDsInput>;
};


export type QueryGetFavoritesArgs = {
  userId?: InputMaybe<IDsInput>;
};


export type QueryGetMenuItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<IDsInput>>>;
};


export type QueryGetRestuarantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  token: Scalars['String']['input'];
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

export type SignUpInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  success?: Maybe<Scalars['String']['output']>;
};

export type UpdateCartItemInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  menuItemId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type SignUpMutationVariables = Exact<{
  data?: InputMaybe<SignUpInput>;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: { __typename?: 'SignUpPayload', success?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  data?: InputMaybe<PartialUpdateUserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: string, name?: string | null, phone?: string | null, email?: string | null, address?: string | null } | null } | null };

export type AddItemToCartMutationVariables = Exact<{
  data?: InputMaybe<AddItemToCartInput>;
}>;


export type AddItemToCartMutation = { __typename?: 'Mutation', addItemToCart?: { __typename?: 'Cart', totalCount?: number | null, cart?: Array<{ __typename?: 'CartItem', count?: number | null, menuItem?: { __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null } | null } | null> | null } | null };

export type DeleteCartItemsMutationVariables = Exact<{
  data?: InputMaybe<DeleteCartItemsInput>;
}>;


export type DeleteCartItemsMutation = { __typename?: 'Mutation', deleteCartItems?: { __typename?: 'Cart', totalCount?: number | null, cart?: Array<{ __typename?: 'CartItem', count?: number | null, menuItem?: { __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null } | null } | null> | null } | null };

export type GetCartQueryVariables = Exact<{
  userId?: InputMaybe<IDsInput>;
}>;


export type GetCartQuery = { __typename?: 'Query', getCart?: { __typename?: 'Cart', totalCount?: number | null, cart?: Array<{ __typename?: 'CartItem', count?: number | null, menuItem?: { __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null } | null } | null> | null } | null };

export type GetFavoritesQueryVariables = Exact<{
  userId?: InputMaybe<IDsInput>;
}>;


export type GetFavoritesQuery = { __typename?: 'Query', getFavorites?: Array<{ __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, image?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, name?: string | null, phone?: string | null, email?: string | null, address?: string | null } };

export type GetRestaurantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRestaurantsQuery = { __typename?: 'Query', getRestaurants?: Array<{ __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, image?: string | null } | null> | null };

export type GetRestuarantQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetRestuarantQuery = { __typename?: 'Query', getRestuarant: { __typename?: 'Restuarant', id: string, name: string, rating?: number | null, categories?: string | null, address: string, description: string, startWorkingDay: string, endWorkingDay: string, image?: string | null, MenuCategories?: Array<{ __typename?: 'MenuCategory', id: string, name: string, MenuItems?: Array<{ __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null } | null> | null } | null> | null } };

export type GetMenuItemsQueryVariables = Exact<{
  ids?: InputMaybe<Array<InputMaybe<IDsInput>> | InputMaybe<IDsInput>>;
}>;


export type GetMenuItemsQuery = { __typename?: 'Query', getMenuItems: Array<{ __typename?: 'MenuItem', id: string, name?: string | null, image?: string | null, description?: string | null, weight?: number | null, price?: number | null }> };


export const SignUpDocument = gql`
    mutation SignUp($data: SignUpInput) {
  signUp(data: $data) {
    success
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
 *      data: // value for 'data'
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: PartialUpdateUserInput) {
  updateUser(data: $data) {
    token
    user {
      id
      name
      phone
      email
      address
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const AddItemToCartDocument = gql`
    mutation AddItemToCart($data: AddItemToCartInput) {
  addItemToCart(data: $data) {
    totalCount
    cart {
      count
      menuItem {
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
export type AddItemToCartMutationFn = Apollo.MutationFunction<AddItemToCartMutation, AddItemToCartMutationVariables>;

/**
 * __useAddItemToCartMutation__
 *
 * To run a mutation, you first call `useAddItemToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemToCartMutation, { data, loading, error }] = useAddItemToCartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddItemToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddItemToCartMutation, AddItemToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemToCartMutation, AddItemToCartMutationVariables>(AddItemToCartDocument, options);
      }
export type AddItemToCartMutationHookResult = ReturnType<typeof useAddItemToCartMutation>;
export type AddItemToCartMutationResult = Apollo.MutationResult<AddItemToCartMutation>;
export type AddItemToCartMutationOptions = Apollo.BaseMutationOptions<AddItemToCartMutation, AddItemToCartMutationVariables>;
export const DeleteCartItemsDocument = gql`
    mutation DeleteCartItems($data: DeleteCartItemsInput) {
  deleteCartItems(data: $data) {
    totalCount
    cart {
      count
      menuItem {
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
export type DeleteCartItemsMutationFn = Apollo.MutationFunction<DeleteCartItemsMutation, DeleteCartItemsMutationVariables>;

/**
 * __useDeleteCartItemsMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemsMutation, { data, loading, error }] = useDeleteCartItemsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteCartItemsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCartItemsMutation, DeleteCartItemsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCartItemsMutation, DeleteCartItemsMutationVariables>(DeleteCartItemsDocument, options);
      }
export type DeleteCartItemsMutationHookResult = ReturnType<typeof useDeleteCartItemsMutation>;
export type DeleteCartItemsMutationResult = Apollo.MutationResult<DeleteCartItemsMutation>;
export type DeleteCartItemsMutationOptions = Apollo.BaseMutationOptions<DeleteCartItemsMutation, DeleteCartItemsMutationVariables>;
export const GetCartDocument = gql`
    query getCart($userId: IDsInput) {
  getCart(userId: $userId) {
    cart {
      count
      menuItem {
        id
        name
        image
        description
        weight
        price
      }
    }
    totalCount
  }
}
    `;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCartQuery(baseOptions?: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
        }
export function useGetCartSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, options);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartSuspenseQueryHookResult = ReturnType<typeof useGetCartSuspenseQuery>;
export type GetCartQueryResult = Apollo.QueryResult<GetCartQuery, GetCartQueryVariables>;
export const GetFavoritesDocument = gql`
    query getFavorites($userId: IDsInput) {
  getFavorites(userId: $userId) {
    id
    name
    rating
    categories
    image
  }
}
    `;

/**
 * __useGetFavoritesQuery__
 *
 * To run a query within a React component, call `useGetFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
      }
export function useGetFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
        }
export function useGetFavoritesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
        }
export type GetFavoritesQueryHookResult = ReturnType<typeof useGetFavoritesQuery>;
export type GetFavoritesLazyQueryHookResult = ReturnType<typeof useGetFavoritesLazyQuery>;
export type GetFavoritesSuspenseQueryHookResult = ReturnType<typeof useGetFavoritesSuspenseQuery>;
export type GetFavoritesQueryResult = Apollo.QueryResult<GetFavoritesQuery, GetFavoritesQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($token: String!) {
  getUser(token: $token) {
    id
    name
    phone
    email
    address
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
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
export const GetMenuItemsDocument = gql`
    query getMenuItems($ids: [IDsInput]) {
  getMenuItems(ids: $ids) {
    id
    name
    image
    description
    weight
    price
  }
}
    `;

/**
 * __useGetMenuItemsQuery__
 *
 * To run a query within a React component, call `useGetMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuItemsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useGetMenuItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetMenuItemsQuery, GetMenuItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMenuItemsQuery, GetMenuItemsQueryVariables>(GetMenuItemsDocument, options);
      }
export function useGetMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMenuItemsQuery, GetMenuItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMenuItemsQuery, GetMenuItemsQueryVariables>(GetMenuItemsDocument, options);
        }
export function useGetMenuItemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMenuItemsQuery, GetMenuItemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMenuItemsQuery, GetMenuItemsQueryVariables>(GetMenuItemsDocument, options);
        }
export type GetMenuItemsQueryHookResult = ReturnType<typeof useGetMenuItemsQuery>;
export type GetMenuItemsLazyQueryHookResult = ReturnType<typeof useGetMenuItemsLazyQuery>;
export type GetMenuItemsSuspenseQueryHookResult = ReturnType<typeof useGetMenuItemsSuspenseQuery>;
export type GetMenuItemsQueryResult = Apollo.QueryResult<GetMenuItemsQuery, GetMenuItemsQueryVariables>;