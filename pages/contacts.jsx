import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Head from "next/head";
import { sendEmail } from "@/utils";
import styles from "styles/Contact.module.scss";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className={`${styles.contact} contact__bg`}>
      <Head>
        <title>Contacts | Emil Murahas</title>
        <meta
          name="description"
          content="You can email me using the short form."
        />
        <meta property="og:title" content="Contacts | Emil Murahas" />
        <meta
          property="og:description"
          content="You can email me using the short form."
        />

        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.contact__title}>Contacts</h1>
        <p className={styles.contact__text}>
          If you have any questions, I'm always happy to discuss them ✉️.
        </p>

        <div className={styles.contact__loader}>
          <ClipLoader loading={loading} color="#40b0ee" />
        </div>

        <div className={styles.contact__content}>
          <form
            className={styles.form}
            onSubmit={(e) => sendEmail(e, setLoading)}
          >
            <input
              className={`${styles.form__input} background-dark background-dark__input`}
              type="text"
              placeholder="First name"
              name="name"
              required
            />

            <input
              className={`${styles.form__input} background-dark background-dark__input`}
              type="text"
              placeholder="Last name"
              name="surname"
              required
            />

            <input
              className={`${styles.form__input} background-dark background-dark__input`}
              type="email"
              placeholder="E-mail"
              name="email"
              required
            />

            <textarea
              className={`${styles.form__text} background-dark background-dark__input`}
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              required
            ></textarea>

            <button
              className={`${styles.form__btn} background-dark background-dark__button`}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
