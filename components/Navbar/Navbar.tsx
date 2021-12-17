import type { NextPage } from "next";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: NextPage = ({ children }) => {
  return (
    <ul className={styles.root}>
      <li className={styles.item}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/dad">
          <a className={styles.link}>Dad</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/mum">
          <a className={styles.link}>Mum</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/holly">
          <a className={styles.link}>Holly</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
