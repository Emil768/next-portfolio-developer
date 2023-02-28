import { BlogItem, InfoPanel } from "@/components";
import client from "@/contentful";
import { EmptyIcon } from "@/public/img";
import { filterArticles } from "@/utils";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "styles/Blog.module.scss";

export const getStaticProps = async () => {
  const blogEntries = await client.getEntries({
    content_type: "article",
    select:
      "fields.title,fields.slug,fields.previewText,fields.imageUrl,fields.category",
  });

  return {
    props: {
      blog: blogEntries.items,
    },
  };
};

const Blog = ({ blog }) => {
  const [searchArticle, setSearchArticle] = useState("");
  const articles = filterArticles(blog, searchArticle);

  return (
    <section className={`${styles.blog} blog__bg`}>
      <Head>
        <title>Blog | Emil Murahas</title>
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
        <div className={styles.blog__content}>
          {articles.length === 0 ? (
            <div className={styles.blog__empty}>
              <div className={styles["blog__empty-title"]}>
                По запросу {`«${searchArticle}» ничего не найдено!`}
              </div>
              <Image
                className={styles["blog__empty-image"]}
                src={EmptyIcon}
                alt="empty"
              />
            </div>
          ) : (
            articles.map((item) => (
              <BlogItem {...item.fields} key={item.fields.slug} />
            ))
          )}
          <InfoPanel blog={blog} setSearchArticle={setSearchArticle} />
        </div>
      </div>
    </section>
  );
};

export default Blog;
