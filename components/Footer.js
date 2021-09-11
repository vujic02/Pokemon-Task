import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://github.com/vujic02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/FooterIconGithub.png"
            className={styles.footer_icon}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nikola-vuji%C4%87-68a127215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/FooterIconLinkedin.png"
            className={styles.footer_icon}
          />
        </a>
        <a
          href="https://instagram.com/_vujic02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/FooterIconInsta.png"
            className={styles.footer_icon}
          />
        </a>
      </div>
      <a
        href="https://github.com/vujic02/Pokemon-Task"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footer__link}
      >
        Github Repository
      </a>
      <span className={styles.footer__credits}>
        Designed & Coded by:
        <a
          href="https://github.com/vujic02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vujic02
        </a>
      </span>
    </div>
  );
};

export default Footer;
