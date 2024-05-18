import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const handleLearnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="home" className={`${styles.home} fade-in`}>
      <h1>Welcome to My Portfolio</h1>
      <p>I am a Full Stack Developer specializing in React and Next.js.</p>
      <button onClick={handleLearnMore}>Learn More</button>
      {showMore && (
        <div>
          <h2>About Me</h2>
          <p>
            Here's some random data about me: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed euismod, nisl nec ultricies
            lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet
            nisl.
          </p>
        </div>
      )}
    </section>
  );
};

export default Home;
