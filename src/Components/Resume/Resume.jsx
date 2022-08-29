import styles from "./resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <div id="ResumeSection" className={styles.resumeSectionScroll}></div>
      <section className={styles.sectionContainer}>
        <div className={styles.lists}>
          <div>
            <p>Some of the tecnologies I use</p>
            <ul>
              <li>HTML and CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>React Native</li>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>MongoDB</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <p>
              This list will be almost infinite in the future, I'm learning more
              every day!
            </p>
          </div>
        </div>
        <div className={styles.greatText}>
          <p>
            I was first introduced to coding during my administration studies in
            the national university of Rosario back in 2019, where I learned to
            draw complex data flow diagrams using computer logic. From then I
            developed an evergrowing interest on logic and how applications,
            programs or games work. The first thing I learned in a free
            youtube's course was html and css in november 2021, the sensation
            when I could see the code that I wrote showing on the screen was
            magic. I played around with css and html for almost 2 months, making
            static pages, learning flex and grid, until I felt that I was ready
            to learn JavaScript. I was very lucky to find a free bootcamp from a
            company who makes web applications here in Rosario, where I learned
            in 4 months things that, if I tried to learn by myself, would have
            take me a lot more time. Now I am learning new languages, new
            libraries and frameworks, and I'm eager to grow and develope great
            things... my journey just began
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
