import Image from "next/image";
import styles from "./BlogItem.module.scss";
import Link from "next/link";

export const BlogItem = ({ title, imageUrl, category, previewText, slug }) => {
  return (
    <Link href={`/articles/${slug}`} className={styles.blogItem}>
      <div className={`${styles.blogItem__content} background-dark`}>
        <div className={styles["blogItem__content-image"]}>
          <Image fill src={`http:${imageUrl.fields.file.url}`} alt="preview" />
        </div>
        <div className={styles["blogItem__content-info"]}>
          <i className={styles.circle}></i>
          <span className={styles["blogItem__content-category"]}>
            {category}
          </span>
          <h3 className={styles["blogItem__content-title"]}>{title}</h3>
          <div className={styles["blogItem__content-text"]}>{previewText}</div>
        </div>
      </div>
    </Link>
  );
};
