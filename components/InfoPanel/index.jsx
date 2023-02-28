import { filterCategories } from "@/utils";
import Categories from "../Categories";
import SearchBar from "../SearchBar";
import styles from "./InfoPanel.module.scss";

export const InfoPanel = ({ blog, setSearchArticle }) => {
  const categoryEntries = filterCategories(blog);
  return (
    <div className={styles.infopanel}>
      <SearchBar setSearchArticle={setSearchArticle} />
      <Categories categoryEntries={categoryEntries} />
    </div>
  );
};
