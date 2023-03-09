import Link from "next/link";
import { useRouter } from "next/router";
import ThemeButton from "../ThemeButton";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <ul className={styles.header__list}>
            <li className={styles["header__list-item"]}>
              <Link
                href={"/works"}
                className={
                  router.pathname === "/works"
                    ? [
                        styles["header__list-link"],
                        styles["link-left__active"],
                      ].join(" ")
                    : [styles["header__list-link"], styles["link-left"]].join(
                        " "
                      )
                }
              >
                Works
              </Link>
            </li>
            <li className={styles["header__list-item"]}>
              <Link
                href={"/contacts"}
                className={
                  router.pathname === "/contacts"
                    ? [
                        styles["header__list-link"],
                        styles["link-right__active"],
                      ].join(" ")
                    : [styles["header__list-link"], styles["link-right"]].join(
                        " "
                      )
                }
              >
                Contacts
              </Link>
            </li>
            <li className={styles["header__list-item"]}>
              <Link
                href={"/blog"}
                className={
                  router.pathname === "/blog"
                    ? [
                        styles["header__list-link"],
                        styles["link-right__active"],
                      ].join(" ")
                    : [styles["header__list-link"], styles["link-right"]].join(
                        " "
                      )
                }
              >
                Blog
              </Link>
            </li>
          </ul>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
