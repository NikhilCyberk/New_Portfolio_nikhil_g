import React from "react";
import styles from "./Home.module.css";
import dp from "./mypic-removebg-preview.png";
import Typewriter from "typewriter-effect";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className={styles.wrapper} id="home">
      <div className={styles.backgroundBg}>
        <div className={styles.backgroundCircle}>
          <div className={styles.backgroundImg}>
            <img src={dp} alt="dp" />
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.section}>
          <div className={styles.content}>
            <div className={styles.titles}>
              <h2 className={styles.title}>
                <span>Riyansh Gupta</span>
              </h2>
              <div className={styles.subtitle}>
                <span>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("React Developer!")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Frontend Developer!")
                        .start();
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={styles.hText}>
              <p className="text-justify">
                A highly skilled web developer with a strong foundation in HTML,
                CSS, JavaScript, Bootstrap, ReactJS, NextJS, NodeJS, and
                MongoDB. I excel in crafting scalable, responsive, and visually
                appealing web applications with clean, efficient code. As a
                problem-solving enthusiast with a robust understanding of data
                structures and algorithms, I am adept at delivering innovative
                solutions while ensuring cross-browser compatibility and optimal
                performance. My rapid learning ability and adaptability to new
                technologies enable me to stay ahead in the ever-evolving web
                development landscape.
              </p>
            </div>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={styles.contactBtn}
            >
              <span className={styles.animatedBtn}>
                <span>
                  CONTACT ME <IoIosArrowForward />
                </span>
              </span>
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={styles.downBtn}
            >
              <AiOutlineDown className={styles.iconDown} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
