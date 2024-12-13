import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>© 2024 Amal Krishna M.U. All rights reserved.</p>
    <p>
      Designed and developed with ❤ by{" "}
      <a
        href="https://github.com/amal-krishna-m-u"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        Amal Krishna
      </a>
    </p>
  </footer>
);

export default Footer;
