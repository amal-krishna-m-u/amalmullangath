import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  // const [showMore, setShowMore] = useState(false);

  // // const handleLearnMore = () => {
  // //   setShowMore(!showMore);
  // //   Window.href("/#about");
  // // };

  return (
    <section id="home" className={`${styles.home} fade-in`}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        \Whether it's designing stunning interfaces or deploying robust
        applications, I've got you covered from start to finish. Let's bring
        your ideas to life!
      </p>

      <br />
      <a href="/#about">
        <button>Learn More</button>
      </a>
    </section>
  );
};

export default Home;
