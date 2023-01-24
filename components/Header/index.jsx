import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <ul className={styles.list}>
            <li className={styles.list__item}>
              <Link
                href={"/works"}
                className={
                  router.pathname === "/works"
                    ? [styles.list__link, styles.linkLeftActive].join(" ")
                    : [styles.list__link, styles.linkLeft].join(" ")
                }
              >
                Works
              </Link>
            </li>
            <li className={styles.list__item}>
              {" "}
              <Link
                href={"/contacts"}
                className={
                  router.pathname === "/contacts"
                    ? [styles.list__link, styles.linkRightActive].join(" ")
                    : [styles.list__link, styles.linkRight].join(" ")
                }
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
