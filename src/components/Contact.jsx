import { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";

const suggestions = [
  "Let's build something great together!",
  "Need help with a web or mobile app?",
  "Looking to collaborate on a project?",
  "Have an idea to discuss?"
];

const Contact = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % suggestions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p className={styles.description}>
        Let&apos;s connect! Reach out to discuss your next project or for any
        collaboration opportunities.
      </p>
      <p key={current} className={styles.suggestion}>
        {suggestions[current]}
      </p>
      <div className={styles.socialLinks}>
        <a
          href="https://wa.me/918848263313?text=I%27m%20interested%20in%20your%20services%20"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/whatsapp.svg" alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.linkedin.com/in/amal-krishna-m-u-4055a1185/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/linkedin.svg" alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/amal-krishna-m-u/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <img src="/github.svg" alt="GitHub" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
