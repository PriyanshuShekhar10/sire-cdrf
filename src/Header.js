import React from "react";
import styles from "./Header.module.css"; // Import the CSS module

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Research Scholars</h1>
      <div className={styles.applyNowContainer}>
        <span className={styles.applyNowFlag}>Apply Now!</span>
        <a
          href="https://discovery.bits-pilani.ac.in/PhDDrive/faculty-research-problems.aspx"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          PhD Drive (2nd Call)
        </a>
      </div>
    </header>
  );
}

export default Header;
