import styles from "./projectDetails.module.css";

const ProjectDetails = (selectedProject) => {
  console.log(selectedProject);

  const renderSwitch = (projectId) => {
    switch (selectedProject.selectedProject) {
      case "Divirta":
        return (
          <>
            <p className={styles.description}>
              Divirta is a dynamic and easy to use application, where you can
              publish your own party room, or hire a party room from another
              user. You also have the possibility to add reviews to party halls
              that you have visited. The app has extensive feedback from other
              developers
            </p>
            <p className={styles.developStatus}>
              This app is currently being developed
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/divirta-project"
                  rel="noreferrer"
                >
                  =&gt; App code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/divirta-project-server"
                  rel="noreferrer"
                >
                  =&gt; Server code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://divirta-project.vercel.app/"
                  rel="noreferrer"
                >
                  =&gt; App link
                </a>
              </li>
            </ul>
          </>
        );
      case "Trackgenix":
        return (
          <>
            <p className={styles.description}>
              Trackgenix is a project that I developed together with different
              groups of developers and testers for the Radium Rocket bootcamp,
              it is an application whose main objective is to simulate the
              registration of hours worked by employees of a fictitious company
              within different projects. It also has different data flows, for
              example, when the user is an administrator, he has the possibility
              to view, delete, edit or add new projects, he can also edit, add,
              or delete the employees in each project.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/BaSP-m2022/martina-trackgenix-app"
                  rel="noreferrer"
                >
                  =&gt; App code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/BaSP-m2022/alexis-trackgenix-server"
                  rel="noreferrer"
                >
                  =&gt; Server code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://martina-trackgenix-app.vercel.app/home"
                  rel="noreferrer"
                >
                  =&gt; App link
                </a>
              </li>
            </ul>
          </>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <h2>{selectedProject.selectedProject}</h2>
      {renderSwitch()}
    </div>
  );
};

export default ProjectDetails;
