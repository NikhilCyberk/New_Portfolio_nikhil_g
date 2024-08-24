import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaInstagram, FaLinkedinIn, FaStar } from 'react-icons/fa';

function Footer() {
  return (
    <div>
        <div className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.text}>Design and developed by Riyansh.</div>
                <div className={styles.socials}>
                    <a href="https://www.instagram.com/_https.riyansh/?igsh=d201OGhzZnMxMDh6/" 
                    //target="_blank"
                    >
                        <FaInstagram className={styles.icon} />
                    </a>
                    <a href="https://www.linkedin.com/in/riyansh999//" 
                    //target="_blank"
                    >
                        <FaLinkedinIn className={styles.icon} />
                    </a>
                    <a href="https://github.com/reygptaa/" 
                    //target="_blank"
                    >
                        <FaGithub className={styles.icon} />
                    </a>
                    <a href="https://leetcode.com/u/reygptaa/" 
                    //target="_blank"
                    >
                        <FaStar Leetcode className={styles.icon} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer