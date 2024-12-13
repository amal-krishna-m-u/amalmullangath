import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => (
  <section id="services" className={styles.services}>
    <h2 className={styles.heading}>My Services</h2>
    <div className={styles.serviceList}>
      <div className={styles.service}>
        <h3 className={styles.serviceTitle}>App Development (Flutter)</h3>
        <p className={styles.serviceDescription}>
          Building high-performance, cross-platform mobile applications using
          Flutter. Whether you need an Android or iOS app, I ensure your app
          runs smoothly on both platforms.
        </p>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20App%20Development%20service%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contactButton}>
            Hire me!
            <img src="/messageme.svg" alt="send message" />
          </div>
        </a>
      </div>

      <div className={styles.service}>
        <h3 className={styles.serviceTitle}>Custom WhatsApp Bot (AI Driven)</h3>
        <p className={styles.serviceDescription}>
          Developing AI-driven WhatsApp bots to automate tasks and enhance
          customer engagement. Improve your customer support and streamline
          communication with an intelligent bot.
        </p>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20WhatApp%20Bot%20service%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contactButton}>
            Hire me!
            <img src="/messageme.svg" alt="send message" />
          </div>
        </a>
      </div>

      <div className={styles.service}>
        <h3 className={styles.serviceTitle}>Web Application Development</h3>
        <p className={styles.serviceDescription}>
          Creating responsive, dynamic web applications tailored to your needs,
          with a focus on performance, usability, and scalability.
        </p>
        <a
          href="https://wa.me/918848263313?text=I'm%20interested%20in%20your%20Web%20Development%20service%20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.contactButton}>
            Hire me!
            <img src="/messageme.svg" alt="send message" />
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Services;
