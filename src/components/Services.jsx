import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => (
  <section id="services" className={styles.services}>
    <h2>Services</h2>
    <div className={styles.serviceList}>
      <div className={styles.service}>
        <h3>App Development (Flutter)</h3>
        <p>Building cross-platform mobile applications using Flutter.</p>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20App%20Development%20service%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.socialLink}>
            Hire me !!!
            <img src="/messageme.svg" alt="send message " />
          </div>
        </a>
      </div>
      <div className={styles.service}>
        <h3>Custom WhatsApp Bot (AI Driven)</h3>
        <p>
          Developing AI-driven bots for WhatsApp to automate tasks and improve
          engagement.
        </p>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20WhatApp%20Bot%20service%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.socialLink}>
            Hire me !!!
            <img src="/messageme.svg" alt="send message " />
          </div>
        </a>
      </div>
      <div className={styles.service}>
        <h3>Web Application Development</h3>
        <p>
          Creating responsive and dynamic web applications tailored to your
          needs.
        </p>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20Web%20Development%20service%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.socialLink}>
            Hire me !!!
            <img src="/messageme.svg" alt="send message " />
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Services;
