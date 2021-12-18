import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../Navbar/Navbar";

import styles from "./Layout.module.scss";

const Layout: NextPage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Family Soundboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>jackhkmatthews</p>
      </footer>
    </div>
  );
};

export default Layout;
