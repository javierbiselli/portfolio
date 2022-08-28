import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div id="ResumeSection" className={styles.resumeSectionScroll}></div>
      <section className={styles.sectionContainer}>resume</section>
      <p>Download my resume here</p>
      <a href="$">Spanish version</a>
    </div>
  );
};

export default Resume;
