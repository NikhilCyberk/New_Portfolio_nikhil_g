import React from "react";
import styles from "./Resume.module.css";
// import { GrPrevious, GrNext } from 'react-icons/gr';

function Resume() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2 className={styles.title}>
              <span>Education</span>
            </h2>
            <div className={styles.subtitle}>
              <span>Studied at</span>
            </div>
          </div>
          <div className={styles.contentItem}>
            <div className={styles.myContent}>
              <div className={styles.myContentOuter}>
                <div className={styles.contentStage}>
                  <div className={styles.contentStageItem}>
                    <div>
                      <div className={styles.date}>
                        <span>2021-2025</span>
                      </div>
                      <div className={styles.name}>
                        Zakir Hussain College Of <br />
                        Engineering & Technology, <br />
                        Aligarh
                      </div>
                      <div className={styles.singlePostText}>
                        <div>
                          <p>
                            I completed my graduation in{" "}
                            <strong>
                              Bachelor's in Technology in Electrical Engineering
                            </strong>
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

export default Resume;
