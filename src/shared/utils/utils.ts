import { PartialUpdateUserInput, User } from "@graphql/index";

export const clearEmptyFields = (fields: Object | undefined) => {
  if (!fields) return;

  return Object.entries(fields).reduce((acc, [key, value]) => {
    if (!!value === false) return acc;
    else acc[key] = value;
    return acc;
  }, {} as any);
};

export const prepareInputValuesToUpdateUser = (
  fields: User | undefined
): PartialUpdateUserInput => {
  if (!fields) return {};

  const { id, __typename, ...otherUser } = fields;

  return clearEmptyFields(otherUser);
};
