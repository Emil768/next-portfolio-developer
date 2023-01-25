import React, { useEffect } from "react";

import styles from "styles/Works.module.scss";
import Image from "next/image";
import About from "@/components/About";
import { projects } from "@/data";

import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

function Projects() {
  useEffect(() => {
    AOS.init({ disable: "phone" });
  }, []);
  return (
    <section className={styles.projects}>
      <Head>
        <title>Works | Emil Murahas</title>
        <meta
          name="description"
          content="Work from the simplest to complex full-stack development."
        />
        <meta property="og:title" content="Works | Emil Murahas" />
        <meta
          property="og:description"
          content="Work from the simplest to complex full-stack development."
        />

        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <About />
        <div className={styles.projects__content}>
          <h2 className={styles.projects__title} data-aos="zoom-in-down">
            Projects{" "}
          </h2>
          <p className={styles.projects__subtitle} data-aos="zoom-in">
            Here you can look at my pet projects, as well as commercial ones,
            unfortunately not all projects have been released or can be shown.
          </p>
          <div className={styles.list}>
            {projects.map((item, index) => (
              <div className={styles.list__item} key={index}>
                <div
                  className={styles.list__info}
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <div className={styles.list__top}>
                    <h3 className={styles.list__itemTitle}>{item.title}</h3>
                    <div className={styles.list__links}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferre"
                        aria-labelledby={`go-to-link-default-${index}`}
                        className={[
                          styles.list__link,
                          styles.list__linkDefault,
                        ].join(" ")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                        </svg>
                        <i
                          className={styles.list__linkText}
                          id={`go-to-link-default-${index}`}
                        >
                          Open link deploy
                        </i>
                      </a>
                      <a
                        href={item.youtube}
                        target="_blank"
                        rel="noreferre"
                        aria-labelledby={`go-to-link-youtube-${index}`}
                        className={[
                          styles.list__link,
                          styles.list__linkYoutube,
                        ].join(" ")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                        </svg>
                        <i
                          className={styles.list__linkText}
                          id={`go-to-link-youtube-${index}`}
                        >
                          Open link on youtube
                        </i>
                      </a>
                      <a
                        href={item.gitLink}
                        target="_blank"
                        rel="noreferre"
                        aria-labelledby={`go-to-link-github-${index}`}
                        className={[
                          styles.list__link,
                          styles.list__linkGithub,
                        ].join(" ")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z" />
                        </svg>
                        <i
                          className={styles.list__linkText}
                          id={`go-to-link-github-${index}`}
                        >
                          Open link on github
                        </i>
                      </a>
                    </div>
                  </div>
                  <p className={styles.list__itemText}>{item.text}</p>
                  <ul className={styles.tags}>
                    {item.tags.map((item, index) => (
                      <li className={styles.tag} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={styles.list__preview}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    fill
                    unoptimized={true}
                    src={item.preview}
                    alt="project preview"
                  />
                  <div className={styles.list__overlay}>
                    <a href={item.link} target="_blank" rel="noreferre">
                      GO!
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
