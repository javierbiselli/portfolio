import styles from "./main.module.css";
import { motion } from "framer-motion";
import backgroundvid from "../../Assets/backgroundvid.mp4";

const Main = () => {
  return (
    <>
      <motion.video
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.3,
          },
        }}
        autoPlay
        loop
        muted
        className={styles.video}
      >
        <source src={backgroundvid} />
      </motion.video>
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
      </div>
    </>
  );
};

export default Main;
