import styles from "./projects.module.css";
import { AnimatePresence } from "framer-motion";
import ProjectsShared from "./ProjectsSharedComp/ProjectsShared";
import Modal from "../Modal/Modal";
import ProjectDetails from "./Project/ProjectDetails";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onClick = (event) => {
    setSelectedProject(event.currentTarget.id);
    setShowModal(true);
  };

  return (
    <AnimatePresence>
      <div className={styles.projectsContainer}>
        <div id="Projects" className={styles.projectSectionScroll}></div>
        <h3>Learn about my projects</h3>
        <section>
          <ProjectsShared id={"CYM"} onClick={onClick} />
          <ProjectsShared id={"Rocket News"} onClick={onClick} />
          <ProjectsShared id={"Compra Altoque"} onClick={onClick} />
          <ProjectsShared id={"Resultados Electorales"} onClick={onClick} />
          <ProjectsShared id={"Divirta"} onClick={onClick} />
          <ProjectsShared id={"Trackgenix"} onClick={onClick} />
        </section>
      </div>
      <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
        <ProjectDetails selectedProject={selectedProject} />
      </Modal>
    </AnimatePresence>
  );
};

export default Projects;
