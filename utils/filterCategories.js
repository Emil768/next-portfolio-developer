export const filterCategories = (articles) => {
	const map = articles.items.reduce(
		(acc, item) => acc.set(item.fields.category, (acc.get(item.fields.category) || 0) + 1),
		new Map(),
	);

	return map;
};
