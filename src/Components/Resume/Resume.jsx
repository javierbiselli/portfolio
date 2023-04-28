import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div id="About" className={styles.resumeSectionScroll}></div>
      <div className={styles.sectionsContainer}>
        <section>
          <div className={styles.aboutContent}>
            <p>ABOUT</p>
            <p>I'm a passionate full stack and mobile developer</p>
            <p>
              I was first introduced to coding during my administration studies
              at the National University of Rosario in 2019, where I learned to
              draw complex data flow diagrams using computer logic. Since then,
              I have developed an ever-growing interest in logic and how
              applications, programs, and games work.
            </p>
            <p>
              My first exposure to actual coding was through YouTube tutorials.
              I learned HTML, CSS, and JavaScript by myself and tried to apply
              all that I learned through practice. Later, I learned React and
              Nodejs through a free bootcamp offered by a local company. This
              gave me all the tools I needed to start developing full and
              complex projects, both on the front and back end, as well as in
              mobile applications.
            </p>
            <p>
              Currently, I am pursuing a degree in programming at the National
              Technological University in Argentina. I am taking many courses
              and bootcamps, and working on many projects and ideas. I am also
              working on improving my English-speaking skills through university
              and everyday practice.
            </p>
          </div>
        </section>
        {/* <section>
          <div className={styles.skillsContent}>
            <p>SKILLS</p>
            <div className={styles.skillsUl}>
              <ul>
                <li>HTML - CSS - JavaScript</li>
                <div>
                  I have 2 years of experience in layout and web page design,
                  responsiveness and functionalities.
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
        </section> */}
      </div>
    </div>
  );
};

export default Resume;
