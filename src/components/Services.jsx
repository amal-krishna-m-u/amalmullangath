import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => (
  <section id="services" className={styles.services}>
    <h2>Services</h2>
    <div className={styles.serviceList}>
      <div className={styles.service}>
        <h3>App Development (Flutter)</h3>
        <p>Building cross-platform mobile applications using Flutter.</p>
      </div>
      <div className={styles.service}>
        <h3>Custom WhatsApp Bot (AI Driven)</h3>
        <p>
          Developing AI-driven bots for WhatsApp to automate tasks and improve
          engagement.
        </p>
      </div>
      <div className={styles.service}>
        <h3>Web Application Development</h3>
        <p>
          Creating responsive and dynamic web applications tailored to your
          needs.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
