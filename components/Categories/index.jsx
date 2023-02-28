import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Categories.module.scss";

const Categories = ({ categoryEntries }) => {
  const router = useRouter();
  return (
    <div className={styles.categories}>
      <div className={styles.categories__content}>
        <div className={styles.categories__title}>Категории</div>
        <ul className={styles.categories__list}>
          {[...categoryEntries.entries()].map(([key, value]) => {
            return (
              <li
                className={
                  router.query.category === key
                    ? [
                        styles["categories__list-item"],
                        styles["categories__list-active"],
                      ].join(" ")
                    : styles["categories__list-item"]
                }
                key={key}
              >
                <Link
                  className={styles["categories__list-link"]}
                  href={`/category/${key}`}
                >
                  <span className={styles["categories__list-title"]}>
                    <i className={styles["categories__list-circle"]}></i>
                    {key}
                  </span>
                  <span className={styles["categories__list-count"]}>
                    {value}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
