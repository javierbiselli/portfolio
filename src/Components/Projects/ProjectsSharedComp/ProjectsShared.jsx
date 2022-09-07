import { useState } from "react";
import styles from "./projectsShared.module.css";
import { motion } from "framer-motion";

const ProjectsShared = ({ id, onClick }) => {
  const [hoverProject, setHoverProject] = useState(false);

  return (
    <div
      className={styles.project}
      id={id}
      onMouseEnter={() => setHoverProject(true)}
      onMouseLeave={() => setHoverProject(false)}
      onClick={onClick}
    >
      {hoverProject === false && (
        <motion.h4
          initial={{
            y: -90,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
            },
          }}
          className={styles.h4Desk}
        >
          {id}
        </motion.h4>
      )}
      <h4 className={styles.h4Cel}>{id}</h4>
      {hoverProject && (
        <motion.div
          className={styles.slider}
          key="slider"
          initial={{
            y: 95,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
            },
          }}
          onClick={onClick}
          id={id}
        >
          <p>Click to learn more</p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsShared;
