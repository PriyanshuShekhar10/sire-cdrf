import React from "react";
import styles from "./PhdDrive.module.css";

export default function PhdDrive() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>PhD DRIVE Program - BITS Pilani</h1>

      <div className={styles.section}>
        <h2 className={styles.title}>Introduction</h2>
        <p className={styles.details}>
          In an evolving global landscape, deep-tech startups helmed by PhD
          founders consistently outperform those led by non-PhDs. These founders
          are distinguished by their specific field expertise, exceptional
          focus, and a natural propensity for innovation—traits imperative for
          success in deep-tech ventures. Recognizing a gap in business acumen,
          BITS Pilani introduced the PhD DRIVE (Deep-tech Research Innovation
          Value generation & Entrepreneurship) program in 2024. This initiative
          is designed to bridge research with entrepreneurial acumen, fostering
          ventures that are rooted in academic research and innovation.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Vision</h2>
        <p className={styles.details}>
          Position BITS Pilani as a pioneering institution in leading deep
          science and technology ventures driven by PhD scholars.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Mission</h2>
        <p className={styles.details}>
          Establish 100 deep-tech ventures founded or co-founded by PhD
          graduates by 2030.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Objectives</h2>
        <ul className={styles.list}>
          <li>
            Cultivate cross-disciplinary ventures to tackle significant societal
            challenges.
          </li>
          <li>
            Graduate PhD students with advanced Technology Readiness Levels (TRL
            > 5).
          </li>
          <li>
            Enhance the IP-based entrepreneurial ecosystem at BITS Pilani.
          </li>
          <li>
            Assert BITS Pilani's dominance in key domains both domestically and
            internationally.
          </li>
          <li>
            Augment the quality and volume of research outputs and industrial
            innovations.
          </li>
          <li>
            Encourage collaboration by matching co-founders among PhD,
            postgraduate, and undergraduate students.
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Key Indicators</h2>
        <ul className={styles.list}>
          <li>Number of PhD admissions vs. ventures created.</li>
          <li>Intellectual Property (IP) filings.</li>
          <li>Citation counts.</li>
          <li>Successful commercializations.</li>
          <li>Funding levels achieved by new ventures.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Fellowship and Funding</h2>
        <p className={styles.details}>
          <span className={styles.bold}>Fellowship:</span> ₹60,000 monthly
          stipend plus benefits for up to five years, contingent on performance.
          <br />
          <span className={styles.bold}>Seed Funding:</span> Up to ₹10 lakhs to
          develop prototypes, with a potential for similar amounts during
          incubation phases.
          <br />
          <span className={styles.bold}>Incubation Support:</span> Preferred
          access to Technology Business Incubators (TBIs) in exchange for equity
          stakes in ventures.
          <br />
          <span className={styles.bold}>Additional Funding:</span> Access to
          industry and alumni funds, along with streamlined entry to government
          funding schemes via TBIs.
        </p>
      </div>
    </div>
  );
}
