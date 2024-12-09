export const getQueryParams = (searchParams, key) => {
	const params = new URLSearchParams(searchParams);
	if (key) {
		params.set('category', key);
	} else {
		params.delete('category');
	}

	return params;
};
