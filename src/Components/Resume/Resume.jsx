import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div id="About" className={styles.resumeSectionScroll}></div>
      <section className={styles.sectionContainer}>
        <div className={styles.lists}></div>
        <div className={styles.greatText}>
          <p className={styles.aboutMe}>ABOUT</p>
          <p className={styles.learning}>I am learning new things every day!</p>
          <p className={styles.text}>
            I was first introduced to coding during my administration studies in
            the national university of Rosario back in 2019, where I learned to
            draw complex data flow diagrams using computer logic. From then I
            developed an evergrowing interest on logic and how applications,
            programs or games work.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
