import styles from "./SearchBar.module.scss";

const SearchBar = ({ setSearchArticle }) => {
  return (
    <div className={styles.searchbar}>
      <input
        className={`${styles.searchbar__input} background-dark background-dark__input`}
        onChange={(e) => setSearchArticle(e.target.value)}
        placeholder="Поиск..."
        maxLength={15}
        type="text"
      />
    </div>
  );
};
export default SearchBar;
