import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "StethoConnect",
    description:
      "A low-cost digital stethoscope enabling remote diagnostics for medical students. Built with React, Flask, and Raspberry Pi, delivering an affordable telemedicine solution under a 5000 INR budget.",
    imageUrl: "/image/stethoconnect.jpeg",
    link: "https://github.com/stethoconnect",
  },
  {
    title: "TeamOne Event Management",
    description:
      "Flutter-based mobile apps for automating event management operations, increasing efficiency by 100%. Deployed on the Amazon App Store for employees and coordinators.",
    imageUrl: "/image/teamone.jpeg",
    link: "https://www.amazon.com/gp/product/B0CH4ZBF1D",
  },
  {
    title: "Invoice Generator",
    description:
      "Web-based tool for invoice generation with GST support. Built with React.js for a seamless user experience and deployed on Netlify.",
    imageUrl: "/image/invoicegenerator.webp",
    link: "https://invoice-gst-generator.netlify.app",
  },
  {
    title: "ClipIt v01",
    description:
      "An intuitive clipboard management tool to enhance productivity. Built with React.js and deployed for streamlined use.",
    imageUrl: "/image/clipit.webp",
    link: "https://github.com/amal-krishna-m-u/clipit",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className={styles.projectImage}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewButton}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
