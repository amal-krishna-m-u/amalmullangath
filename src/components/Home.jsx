import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section id="home" className={`${styles.home}`}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Whether it&apos;s designing stunning interfaces or deploying robust
        applications, I&apos;ve got you covered from start to finish. Let&apos;s
        bring your ideas to life!
      </p>
      <a href="/#about">
        <button>Learn More</button>
      </a>
    </section>
  );
};

export default Home;
