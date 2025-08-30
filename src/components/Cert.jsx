import { Award } from "lucide-react";
import { crt } from "../data/crt";
import styles from "../styles/Certifications.module.css";

const Cert = () => {
  return (
    <section id="Certifications" className={styles.certifications}>
      <h2>Certifications</h2>
      <div className={styles.grid}>
        {crt.map((cert) => (
          <div key={cert.id} className={styles.certCard}>
            <Award className={styles.icon} aria-hidden="true" />
            <h3>{cert.name}</h3>
            <p>
              <strong>Issued By:</strong> {cert.issuedBy}
            </p>
            <p>
              <strong>Issue Date:</strong> {cert.issueDate}
            </p>
            <p>
              <strong>Credential ID:</strong> {cert.credentialId}
            </p>
            <div className={styles.buttonGroup}>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  View Certificate
                </a>
              )}
              {cert.transcript && (
                <a
                  href={cert.transcript}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buttonSecondary}
                >
                  Transcript
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cert;
