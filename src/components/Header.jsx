import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>My Portfolio</div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`${styles.navLinks} ${showMenu ? styles.show : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
