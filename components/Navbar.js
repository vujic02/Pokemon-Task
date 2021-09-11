import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <img
          src="/images/logo.png/"
          className={styles.navbar__logo}
          alt="logo"
        />
      </Link>
      <a className={styles.navbar__link} href="#top">
        Scroll to top
      </a>
    </div>
  );
};

export default Navbar;
