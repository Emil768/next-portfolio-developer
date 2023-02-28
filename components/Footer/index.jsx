import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__author}>Emil Murahas</div>
          <div className={styles.footer__position}>Frontend developer</div>
        </div>
      </div>
    </footer>
  );
};
