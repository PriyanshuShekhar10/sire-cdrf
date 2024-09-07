import React from "react";
import "./Workshop.css";
import workshopImage from "../Assets/WorkshopPoster.png"; // Adjust path as necessary

const Workshop = () => {
  return (
    <>
      <div className="top"></div>
      <div className="workshop">
        <header className="workshop-header">
          <h1>Battery Technology for EVs and Smart Grid Workshop</h1>
          <p className="date-location">
            <strong>October 23-24, 2024</strong> | BITS Pilani, Pilani Campus
          </p>
        </header>

        <div className="workshop-content">
          <section className="about">
            <h2>About the Workshop</h2>
            <p>
              Join us for a comprehensive workshop on the latest advancements in
              battery technology for electric vehicles (EVs) and smart grid
              systems. The workshop brings together industry leaders and
              academic experts to discuss trends, innovations, and hands-on
              applications in this evolving field.
            </p>
            <p>
              This event is co-organized by BITS Pilani, India and Chalmers
              University of Technology, Sweden, offering a blend of theoretical
              insights and practical demonstrations.
            </p>
            {/* Image after the description */}
            <div className="image-container">
              <img src={workshopImage} alt="Workshop illustration" />
            </div>
          </section>

          <section className="highlights">
            <h2>Workshop Highlights</h2>
            <div className="highlight-grid">
              <div className="highlight-card">
                <h3>Lectures by Industry Experts</h3>
                <p>
                  Gain insights from renowned experts in battery technology and
                  EV systems.
                </p>
              </div>
              <div className="highlight-card">
                <h3>Industry-Relevant Skills</h3>
                <p>
                  Participate in discussions on essential employability skills
                  for the industry.
                </p>
              </div>
              <div className="highlight-card">
                <h3>Hands-On Battery Testing</h3>
                <p>
                  Experience live sessions on battery testing, understanding
                  their performance in various applications.
                </p>
              </div>
              <div className="highlight-card">
                <h3>VR E-Mobility Demonstration</h3>
                <p>
                  Explore next-gen e-mobility technologies through immersive VR
                  experiences.
                </p>
              </div>
              <div className="highlight-card">
                <h3>Smart Microgrid Visit</h3>
                <p>
                  Tour a fully functional smart microgrid and see how renewable
                  energy is integrated.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Workshop;
