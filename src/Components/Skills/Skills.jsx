import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaServer,
} from "react-icons/fa";
import { DiMysql, DiFirebase, DiReact } from "react-icons/di";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div id="Skills" className={styles.skillSectionScroll}></div>
      <h2>Skills</h2>
      <div className={styles.icons}>
        <div className={styles.categoryContainer}>
          <h3>Back-end</h3>
          <div className={`${styles.backEnd} ${styles.category}`}>
            <div className={styles.icon}>
              <FaNodeJs />
              <span className={styles.tooltip}>Node.js</span>
            </div>
            <div className={styles.icon}>
              <DiMysql />
              <span className={styles.tooltip}>MySQL</span>
            </div>
            <div className={styles.icon}>
              <FaServer />
              <span className={styles.tooltip}>MongoDB</span>
            </div>
            <div className={styles.icon}>
              <DiFirebase />
              <span className={styles.tooltip}>Firebase</span>
            </div>
          </div>
        </div>
        <div className={styles.categoryContainer}>
          <h3>Front-end</h3>
          <div className={`${styles.frontEnd} ${styles.category}`}>
            <div className={styles.icon}>
              <FaHtml5 />
              <span className={styles.tooltip}>HTML5</span>
            </div>
            <div className={styles.icon}>
              <FaCss3 />
              <span className={styles.tooltip}>CSS3</span>
            </div>
            <div className={styles.icon}>
              <FaJs />
              <span className={styles.tooltip}>JavaScript</span>
            </div>
            <div className={styles.icon}>
              <FaReact />
              <span className={styles.tooltip}>React</span>
            </div>
            <div className={styles.icon}>
              <FaAngular />
              <span className={styles.tooltip}>Angular</span>
            </div>
          </div>
        </div>

        <div className={styles.categoryContainer}>
          <h3>Mobile</h3>
          <div className={`${styles.mobile} ${styles.category}`}>
            <div className={styles.icon}>
              <DiReact />
              <span className={styles.tooltip}>React Native</span>
            </div>
          </div>
        </div>
      </div>
      <p style={{ color: "white", textAlign: "center" }}>
        I'm also learning C and C#
      </p>
    </div>
  );
};

export default Skills;
