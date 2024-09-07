import React from "react";
import styles from "./Header.module.css"; // Import the CSS module

function Header() {
  return (
    <header className={styles.header}>
      {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
      <h1 className={styles.title}>Research Scholars</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          PhD scholars under CDRF (1st call)
        </button>
        <button className={styles.button}>
          PhD scholars under CDRF (2nd call)
        </button>
        <a
          href="https://sire.bits-pilani.ac.in/programs/research/phd-drive_1"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          PhD Drive
        </a>
      </div>
    </header>
  );
}

export default Header;
