import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div id="Skills" className={styles.skillsSectionScroll}></div>
      <section className={styles.listTec}>
        <p>SKILLS</p>
        <div className={styles.ul}>
          <ul>
            <li>. HTML and CSS</li>
            <li>. JavaScript</li>
            <div>
              I have over 1 year of experience in layout and web page design,
              responsiveness and functionalities.
            </div>
          </ul>
          <ul>
            <li>. React</li>
            <li>. Redux</li>
            <li>. Firebase</li>
            <div>
              Intermediate / advanced skills in ReactJs, as well as many
              frameworks and libraries, to give versatility and functionality to
              the web, as well as improvements in performance and scalability.
            </div>
          </ul>
          <ul>
            <li>. NodeJS</li>
            <li>. ExpressJS</li>
            <li>. MongoDB</li>
            <div>
              Advanced skills in NodeJS and npm, which are very usefull for
              back-end, as well as Express. Knowledge in databases such as
              MongoDB and Firebase.
            </div>
            <div>
              I'm currently learning React Native, i'm looking forward to
              develop the next succesfull app
            </div>
          </ul>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Skills;
