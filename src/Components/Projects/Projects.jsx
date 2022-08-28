import styles from "./projects.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import ProjectDetails from "./Project/ProjectDetails";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const onClick = (event) => {
    setSelectedProject(event.currentTarget.id);
    setShowModal(true);
  };

  return (
    <div className={styles.projectsContainer}>
      <div id="ProjectSection" className={styles.projectSectionScroll}></div>
      <h3>My projects</h3>
      <section>
        <div id="Divirta" className={styles.project} onClick={onClick}>
          <h4>Divirta</h4>
        </div>
        <div id="Trackgenix" className={styles.project} onClick={onClick}>
          <h4>Trackgenix</h4>
        </div>
        <div id="Coming soon..." className={styles.project} onClick={onClick}>
          <h4>Coming soon...</h4>
        </div>
        <div id="Coming soon..." className={styles.project} onClick={onClick}>
          <h4>Coming soon...</h4>
        </div>
      </section>
      <Modal
        isOpen={showModal}
        handleClose={() => setShowModal(false)}
        closeClick={() => setShowModal(false)}
      >
        <ProjectDetails selectedProject={selectedProject} />
      </Modal>
    </div>
  );
};

export default Projects;
