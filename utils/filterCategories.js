export const filterCategories = (arr) => {
  const map = arr.reduce(
    (acc, item) =>
      acc.set(item.fields.category, (acc.get(item.fields.category) || 0) + 1),
    new Map()
  );

  return map;
};
