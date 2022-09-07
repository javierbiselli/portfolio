import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div id="About" className={styles.resumeSectionScroll}></div>
      <div className={styles.sectionsContainer}>
        <section>
          <div className={styles.aboutContent}>
            <p>ABOUT</p>
            <p>I am learning new tecnologies every day!</p>
            <p>
              I was first introduced to coding during my administration studies
              in the national university of Rosario back in 2019, where I
              learned to draw complex data flow diagrams using computer logic.
              From then I developed an evergrowing interest on logic and how
              applications, programs and games work.
            </p>
          </div>
        </section>
        <section>
          <div className={styles.skillsContent}>
            <p>SKILLS</p>
            <div className={styles.skillsUl}>
              <ul>
                <li>HTML - CSS - JavaScript</li>
                <div>
                  I have over 1 year of experience in layout and web page
                  design, responsiveness and functionalities.
                </div>
              </ul>
              <ul>
                <li>React - Redux - Firebase</li>
                <div>
                  Intermediate / advanced skills in ReactJs, as well as many
                  frameworks and libraries, to give versatility and
                  functionality to the web, as well as improvements in
                  performance and scalability.
                </div>
              </ul>
              <ul>
                <li>NodeJS - Express - MongoDB</li>
                <div>
                  Advanced skills in NodeJS and npm, which are very usefull for
                  back-end, as well as Express. Knowledge in databases such as
                  MongoDB and Firebase.
                </div>
              </ul>
            </div>
          </div>
        </section>
        <div className={styles.learning}>
          I'm currently learning React Native. Looking forward to develop the
          next succesfull app!
        </div>
      </div>
    </div>
  );
};

export default Resume;
