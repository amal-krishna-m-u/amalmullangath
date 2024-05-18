import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Projects.module.css";

const projects = [
  {
    title: "Mind Corner",
    description:
      "A web-based system to assess students' mental health using various psychological tools. Developed for the psychology division of KMM College of Arts and Science, the project is currently in its feasibility study, requirement gathering, and tool selection stages.",
    imageUrl: "/image/mindcorner.jpeg",
    link: "/",
  },
  {
    title: "StethoConnect",
    description:
      "A telemedicine initiative introducing an economical digital stethoscope solution for medical students. It enables preliminary medical examinations with the help of affordable digital stethoscopes and remote medical professionals. The project involved front-end development, hosting, and configuring the Raspberry Pi interface for data collection and transmission.",
    imageUrl: "/image/stethoconnect.jpeg",
    link: "https://github.com/StethoConnect",
  },
  {
    title: "TeamOne Event Management",
    description:
      "A Flutter Android application developed for TeamOne Event Management, automating billing, rental stock management, and employee management systems. The project includes two mobile applications for employees and coordinators/admins, increasing event coordinators' efficiency by 100%.",
    imageUrl: "/image/teamone.jpeg",
    link: "https://www.amazon.com/gp/product/B0CH4ZBF1D",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        infiniteLoop={true}
        showIndicators={false}
      >
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.gradientOverlay}></div>
            </div>
            <div className={styles.projectDetails}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
