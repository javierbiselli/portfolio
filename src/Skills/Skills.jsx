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
            <li>. React</li>
            <li>. Redux</li>
            <li>. Firebase</li>
            <li>. React Native</li>
          </ul>
          <ul>
            <li>. NodeJS</li>
            <li>. ExpressJS</li>
            <li>. MongoDB</li>
            <li>. Java</li>
            <li>. Python</li>
          </ul>
        </div>
        <div>And many more small libraries and frameworks</div>
        <div></div>
      </section>
    </div>
  );
};

export default Skills;
