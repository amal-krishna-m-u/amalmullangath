import React, { useState } from "react";
import { SquareTerminal } from "lucide-react"; // Import the SquareTerminal icon
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  let menuTimeout; // Timeout to manage hover delay

  const showMenu = () => {
    clearTimeout(menuTimeout); // Clear any existing timeout
    setIsMenuVisible(true);
  };

  const hideMenu = () => {
    menuTimeout = setTimeout(() => {
      setIsMenuVisible(false);
    }, 10); // Delay before hiding the menu
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Amal Krishna M U</div>
      <div
        className={styles.settings}
        onMouseEnter={showMenu}
        onMouseLeave={hideMenu}
      >
        <SquareTerminal className={styles.settingsIcon} />
        {isMenuVisible && (
          <nav className={styles.dropdownMenu}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
