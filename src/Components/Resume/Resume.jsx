import styles from "./resume.module.css";
import react from "../../Assets/react.png";
import redux from "../../Assets/redux.png";
import firebase from "../../Assets/firebase.png";
import express from "../../Assets/nodejs.png";
import mongodb from "../../Assets/mongodb.png";
import mysql from "../../Assets/mysql.png";

const Resume = () => {
  return (
    <div className={styles.wholeResumeContainer}>
      <div id="ResumeSection" className={styles.resumeSectionScroll}></div>
      <section className={styles.resumeContainer} id="ResumeSection">
        <h4>Tecnologies I use</h4>
        <div className={styles.resumeListContainer}>
          <div className={styles.resumeList}>
            <h5>FrontEnd</h5>
            <ul>
              <li>
                <img src={react} alt="React" title="React" />
              </li>
              <li>
                <img src={redux} alt="Redux" title="Redux" />
              </li>
              <li>
                <img src={firebase} alt="Firebase" title="Firebase" />
              </li>
            </ul>
          </div>
          <div className={styles.resumeList}>
            <h5>BackEnd</h5>
            <ul>
              <li>
                <img
                  src={express}
                  alt="Node/Express JS"
                  title="Node/Express JS"
                />
              </li>
              <li>
                <img src={mongodb} alt="MongoDB" title="MongoDB" />
              </li>
              <li>
                <img src={mysql} alt="MySQL" title="MySQL" />
              </li>
            </ul>
          </div>
          <div className={styles.resumeListNoImg}>
            <h5>Others I also used</h5>
            <ul>
              <li>- Joi for validations in front and backend</li>
              <li>- Jest for unit testing</li>
              <li>- React router dom</li>
              <li>- React hook form</li>
              <li>- Redux thunk</li>
              <li>- Git and GitHub for branching and version control</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
