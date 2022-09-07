import styles from "./main.module.css";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className={styles.mainContainer} id="home">
      <section>
        <motion.p
          initial={{
            x: -1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1.2,
            },
          }}
        >
          Hi, i'm Javier
        </motion.p>
        <motion.p
          initial={{
            x: 1000,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 1.6,
            },
          }}
          className={styles.fullStack}
        >
          Full stack developer
        </motion.p>
        <motion.a
          href="#Contact"
          initial={{
            x: 3000,
            y: 800,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.3,
              duration: 1.1,
            },
          }}
          className={styles.contactButton}
        >
          Contact me
        </motion.a>
      </section>
      <motion.div
        initial={{
          x: -3000,
          y: 800,
          opacity: 0,
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            delay: 1.3,
            duration: 1.1,
          },
        }}
        className={styles.getCv}
      >
        <a
          href="https://drive.google.com/file/d/1tf5Yj5bpciYRCqt_kkslwldRpawsqf-l/view"
          target="_blank"
          rel="noreferrer"
        >
          Get my cv
        </a>
        <a
          href="https://www.linkedin.com/in/javier-biselli-2b8228236/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/javierbiselli"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </motion.div>
    </div>
  );
};

export default Main;
