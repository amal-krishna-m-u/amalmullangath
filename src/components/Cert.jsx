import React from "react";
import styles from "../styles/Certifications.module.css";

const Cert = () => {
  const crt = [
    {
      id: 1,
      name: "Microsoft Azure Fundamentals (AZ-900)",
      issuedBy: "Microsoft",
      issueDate: "Aug 31, 2024",
      credentialId: "B62Z75-67DFE5",
      link: "https://drive.google.com/file/d/1_9JKKI5KPzZh-IVHBeDWJScQS4UAwS1B/view?usp=sharing",
      transcript:
        "https://learn.microsoft.com/en-us/users/amalkrishnamu-5653/transcript/7xxw3a6llnlw4wr?tab=credentials-tab",
    },
  ];

  return (
    <section id="Certifications" className={styles.certifications}>
      <h2>Certifications</h2>
      <div className={styles.grid}>
        {crt.map((cert) => (
          <div key={cert.id} className={styles.certCard}>
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
            <a href={cert.transcript} target="_blank" rel="noopener noreferrer">
              View Transcript
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cert;
