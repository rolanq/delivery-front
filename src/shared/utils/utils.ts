export const clearEmptyFields = (fields: Object) => {
  return Object.entries(fields).reduce((acc, [key, value]) => {
    if (!!value === false) return acc;
    else acc[key] = value;
    return acc;
  }, {} as any);
};
