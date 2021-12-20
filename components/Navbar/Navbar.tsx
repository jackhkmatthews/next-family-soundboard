import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <ul className={styles.root}>
      <li
        className={[
          styles.item,
          styles.dad,
          router.pathname === "/dad" ? styles.isActive : "",
        ].join(" ")}
      >
        <Link href="/dad">
          <a className={styles.link}>Dad</a>
        </Link>
      </li>
      <li
        className={[
          styles.item,
          styles.mamma,
          router.pathname === "/mamma" ? styles.isActive : "",
        ].join(" ")}
      >
        <Link href="/mamma">
          <a className={styles.link}>Mamma</a>
        </Link>
      </li>
      <li
        className={[
          styles.item,
          styles.holly,
          router.pathname === "/holly" ? styles.isActive : "",
        ].join(" ")}
      >
        <Link href="/holly">
          <a className={styles.link}>Holly</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
