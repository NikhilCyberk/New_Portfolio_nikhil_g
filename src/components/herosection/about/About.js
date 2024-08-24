import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.section} id="about">
      <div className={styles.content}>
        <div className={styles.titles}>
          <h2 className={styles.title}>
            <span>About me</span>
          </h2>
          <div className={styles.subtitle}>
            <span>My Story</span>
          </div>
        </div>
        <div className={styles.about}>
          <p>
            I’m a final year student and currently pursuing a Bachelor’s in
            Technology , with an expected graduation in 2025. Alongside my core
            discipline, I have a strong passion for coding and web development,
            with a deep interest in problem-solving and data structures and a
            strong foundation in HTML, CSS, JavaScript, Bootstrap, ReactJS,
            NextJS, NodeJS, and MongoDB. I am adept at delivering innovative
            solutions while ensuring cross-browser compatibility and optimal
            performance. My rapid learning ability and adaptability to new
            technologies enable me to stay ahead in the ever-evolving web
            development landscape.
          </p>
        </div>
      </div>
      <div className={styles.infoList}>
        <ul>
          <li>
            <strong>
              <span>Age: </span>
            </strong>
            <span>22</span>
          </li>
          <li>
            <strong>
              <span>Residance: </span>
            </strong>
            <span>India</span>
          </li>
          <li>
            <strong>
              <span>Freelance: </span>
            </strong>
            <span>Available</span>
          </li>
          <li>
            <strong>
              <span>Address: </span>
            </strong>
            <span>Kasganj, Uttar Pradesh</span>
          </li>
          <li>
            <strong>
              <span>Phone: </span>
            </strong>
            <span>+91 9068079067</span>
          </li>
          <li>
            <strong>
              <span>Email: </span>
            </strong>
            <span>reygptaa@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
