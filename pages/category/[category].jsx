import client from "@/contentful";
import { useState } from "react";
import Head from "next/head";
import { filterArticles } from "@/utils";
import { EmptyIcon } from "@/public/img";
import Image from "next/image";
import { BlogItem, InfoPanel } from "@/components";
import styles from "styles/Category.module.scss";

export const getStaticPaths = async () => {
  const categoryEntries = await client.getEntries({
    content_type: "article",
    select: "fields.category",
  });

  return {
    paths: categoryEntries.items.map((item) => {
      return {
        params: {
          category: item.fields.category,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slugCategory = params.category;

  const allCategoriesEntries = await client.getEntries({
    content_type: "article",
    select: "fields.category",
  });

  const categoryEntries = await client.getEntries({
    content_type: "article",
    "fields.category": slugCategory,
    select:
      "fields.title,fields.slug,fields.previewText,fields.imageUrl,fields.category",
  });

  return {
    props: {
      blog: allCategoriesEntries.items,
      categoryItems: categoryEntries.items,
    },
  };
};

const Category = ({ categoryItems, blog }) => {
  const [searchArticle, setSearchArticle] = useState("");
  const filterCategoriesItems = filterArticles(categoryItems, searchArticle);

  return (
    <section className={`${styles.category} blog__bg`}>
      <Head>
        <title>Категория</title>
        <meta
          name="description"
          content="Блог о жизни фронтенд разработчика а также его познаниями за последние годы."
        />
        <meta property="og:title" content="Blog | Emil Murahas" />
        <meta
          property="og:description"
          content="Блог о жизни фронтенд разработчика а также его познаниями за последние годы."
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <div className={styles.category__content}>
          {filterCategoriesItems.length === 0 ? (
            <div className={styles.category__empty}>
              <div className={styles["category__empty-title"]}>
                По запросу {`«${searchArticle}» ничего не найдено!`}
              </div>
              <Image
                className={styles["category__empty-image"]}
                src={EmptyIcon}
                alt="empty"
              />
            </div>
          ) : (
            filterCategoriesItems.map((item) => (
              <BlogItem {...item.fields} key={item.fields.slug} />
            ))
          )}
          <InfoPanel blog={blog} setSearchArticle={setSearchArticle} />
        </div>
      </div>
    </section>
  );
};

export default Category;
