import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <div className={styles.socialLinks}>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20services%20"
          target="_blank"
          className={styles.socialLink}
        >
          <img src="/whatsapp.svg" alt="whatsapp" />
        </a>
        <a
          href="https://www.linkedin.com/in/amal-krishna-m-u-4055a1185/"
          target="_blank"
          className={styles.socialLink}
        >
          <img src="linkedin.svg" alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/amal-krishna-m-u/"
          target="_blank"
          className={styles.socialLink}
        >
          <img src="github.svg" alt="GitHub" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
