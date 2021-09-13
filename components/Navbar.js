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
      <p className={styles.navbar__link} onClick={() => window.scrollTo(0, 0)}>
        Scroll to top
      </p>
    </div>
  );
};

export default Navbar;
