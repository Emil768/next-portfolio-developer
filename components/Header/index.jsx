import Link from "next/link";
import { useRouter } from "next/router";
import ThemeButton from "../ThemeButton";
import boopSound from "@/public/sounds/boop.mp3";
import useSound from "use-sound";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const [play] = useSound(boopSound);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <ul className={styles.header__list}>
            <li className={styles["header__list-item"]}>
              <Link
                href={"/works"}
                onClick={() => play()}
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
                onClick={() => play()}
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
                onClick={() => play()}
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
