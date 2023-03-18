import Head from "next/head";
import Header from "../Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
      />
    </Head>
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  </>
);

export default Layout;
