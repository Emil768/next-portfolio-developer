import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "@/contentful";
import { useEffect, useState } from "react";
import { optionsDate, optionsText } from "@/data";
import Head from "next/head";
import styles from "styles/Article.module.scss";
import Link from "next/link";
import { Footer } from "@/components";

export const getStaticPaths = async () => {
  const articleEntries = await client.getEntries({
    content_type: "article",
    select: "fields.slug",
  });

  return {
    paths: articleEntries.items.map((item) => {
      return {
        params: {
          article: item.fields.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.article;
  const articleEntries = await client.getEntries({
    content_type: "article",
    limit: 1,
    "fields.slug": slug,
    select:
      "fields.title,fields.date,fields.imageUrl,fields.previewText,fields.slug,sys.createdAt,fields.previewText,fields.text,fields.category",
  });

  const [article] = articleEntries.items;

  return {
    props: {
      article,
    },
  };
};

const Article = ({ article }) => {
  const { title, date, category, imageUrl, previewText, text } = article.fields;
  const [dateArticle, setDateArticle] = useState(date);

  useEffect(() => {
    setDateArticle(new Date(date).toLocaleDateString("ru-RU", optionsDate));
  }, []);

  return (
    <div className={`${styles.article} blog__bg`}>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" content={`${previewText}`} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:description" content={`${previewText}`} />
        <meta
          property="og:image"
          content={`http:${imageUrl.fields.file.url}`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <div className={`${styles.article__content} background-dark`}>
        <h3 className={styles.article__title}>{title}</h3>
        <div className={styles.article__info}>
          <div className={[styles.article__category].join(" ")}>
            <i className={styles["article__category-circle"]}></i>
            <Link
              href={`/category/${category}`}
              className={styles["article__category-title"]}
            >
              {category}
            </Link>
          </div>
          <div className={styles.article__date}>{dateArticle}</div>
        </div>
        <div className={styles.article__text}>
          {documentToReactComponents(text, optionsText)}
        </div>
      </div>
    </div>
  );
};

export default Article;
