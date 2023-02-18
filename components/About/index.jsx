import styles from "./About.module.scss";
import { skills } from "data";
import { AuthorIcon, ArrowIcon } from "public/img";
import Image from "next/image";

const About = () => (
  <section className={styles.about}>
    <div className={styles.about__top}>
      <h1 className={styles.about__title} data-aos="zoom-in-down">
        Get to <span className={styles["about__color-text"]}>know</span> me!
      </h1>
      <Image
        data-aos="zoom-in-left"
        data-aos-duration="3000"
        width={40}
        height={60}
        src={ArrowIcon}
        alt="arrow"
        priority={true}
      />
    </div>
    <div className={styles.about__wrapper}>
      <div className={styles.about__content}>
        <div className={styles.author}>
          <Image
            data-aos="flip-left"
            data-aos-duration="1500"
            fill
            priority={true}
            src={AuthorIcon}
            alt="author"
          />
        </div>
        <p className={styles.about__text}>
          Hello everyone again! You probably already know that my name is Emil,
          now I would like to tell you a little about myself. At the moment I
          live in the Crimea in the city of Simferopol. I got acquainted with
          programming when I entered college in 2019 and until graduation, I
          actively studied technologies such as <b>HTML</b>, <b>CSS</b>,
          <b>Javascript</b>. Later I got acquainted with <b>ReactJs</b> and
          began to feel the backend technically (<b>Nodejs</b>,<b> Mongo</b>,
          <b> Mysql</b>). Today I am actively looking for a job to hone my
          knowledge even more and gain experience in application development!
        </p>
      </div>
      <div
        className={styles.about__arrow}
        data-aos="zoom-in-right"
        data-aos-duration="3000"
      >
        <Image
          width={40}
          height={60}
          src={ArrowIcon}
          alt="arrow"
          priority={true}
        />
      </div>
    </div>

    <div className={styles.skills}>
      <h2 className={styles.skills__title} data-aos="zoom-in-down">
        My Skills
      </h2>
      <ul className={styles.skills__list}>
        {skills.map((item, index) => (
          <li
            className={`${styles.skills__item} skills__item-dark`}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
