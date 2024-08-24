import React from "react";
import styles from "./Experience.module.css";
// import { GrPrevious, GrNext } from 'react-icons/gr';

function Experience() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              <span>Experience</span>
            </h2>
            <div className={styles.subtitle}>
              <span>Working with</span>
            </div>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.myContent}>
              <div className={styles.myContentOuter}>
                <div className={styles.contentStage}>
                  <div className={styles.contentStageItem}>
                    <div>
                      <div className={styles.date}>
                        <span>Currently</span>
                      </div>
                      <div className={styles.name}>
                        Bluestack Finotech<br></br>
                        <p>Software Engineer Intern</p>
                      </div>
                      <div className={styles.singlePostText}>
                        <div>
                          <p>
                            As a <strong>Co-Lead</strong>, I colloborated with
                            my teammates and develop a seamless user interface
                            for Admin Dashboard and Develop a web application
                            and REST API that provides IPO-related information
                            to the public .
                          </p>
                        </div>
                      </div>
                      <div className={styles.name}>
                        Downpour Consultancy Services<br></br>
                        <p>Frontend Developer Intern</p>
                      </div>
                      <div className={styles.singlePostText}>
                        <div>
                          <p>
                            As a <strong>Frontend Developer</strong>, Designing
                            and developing client-side software and applications
                            using HTML5, CSS, and Java Script 
                            Collaborated with
                            designers and backend developers to ensure seamless
                            integration of frontend and backend functionality.
                          </p>
                        </div>
                      </div>
                      <div className={styles.name}>
                        Inamigos Foundation<br></br>
                        <p>Fundraising Intern</p>
                      </div>
                      <div className={styles.singlePostText}>
                        <div>
                          <p>
                            As a <strong>Fundraising Intern</strong>, As a Fundraising Intern, I contributed to successful fundraising campaigns by researching potential donors, managing communications,
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
