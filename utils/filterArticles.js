export const filterArticles = (arr, searchArticle) => {
  const articles = arr.filter((item) =>
    item.fields.title.toLowerCase().includes(searchArticle.toLowerCase())
  );
  return articles;
};
