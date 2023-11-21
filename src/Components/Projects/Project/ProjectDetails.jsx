import styles from "./projectDetails.module.css";

const ProjectDetails = ({ selectedProject }) => {
  const renderSwitch = (projectId) => {
    switch (selectedProject) {
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
                  =&gt; App code (Private repo)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/BaSP-m2022/alexis-trackgenix-server"
                  rel="noreferrer"
                >
                  =&gt; Server code (Private repo)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://martina-trackgenix-app.vercel.app/home"
                  rel="noreferrer"
                >
                  =&gt; App link (Private)
                </a>
              </li>
            </ul>
          </>
        );
      case "Resultados Electorales":
        return (
          <>
            <p className={styles.description}>
              Resultados electorales is a project that I developed for the
              Computer Laboratory 2 course of the University Technical Degree in
              Programming. It is built using vanilla JavaScript and is a web
              page that utilizes a government API to query the election results
              from recent years in Argentina.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/tup-lc2-votacion-app"
                  rel="noreferrer"
                >
                  =&gt; App code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://javierbiselli.github.io/tup-lc2-votacion-app/"
                  rel="noreferrer"
                >
                  =&gt; App link
                </a>
              </li>
            </ul>
          </>
        );
      case "Compra Altoque":
        return (
          <>
            <p className={styles.description}>
              Compra Altoque is an application designed for checking prices at
              local stores and convenience stores. It provides an opportunity
              for merchants to compete and for customers to save money.
              Additionally, it features a management system for businesses
              incorporated into the application, allowing them to handle their
              products, prices, stock, etc
            </p>
            <p className={styles.description}>
              To access the management system, the following credentials can be
              used:
            </p>
            <p className={styles.description}>
              <b>Email:</b> javiertest@gmail.com
            </p>
            <p className={styles.description}>
              <b>Password:</b> test123
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/CompraAltoque-App-React-Native"
                  rel="noreferrer"
                >
                  =&gt; App code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://sistemadegestion-two.vercel.app/"
                  rel="noreferrer"
                >
                  =&gt; Management System
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/serversistemadegestion"
                  rel="noreferrer"
                >
                  =&gt; Server
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/CompraAltoque-Sistema-de-gestion-React"
                  rel="noreferrer"
                >
                  =&gt; Management System code
                </a>
              </li>
            </ul>
          </>
        );
      case "Rocket News":
        return (
          <>
            <p className={styles.description}>
              Rocket News is a website for news, blogs, and reports about
              rockets and general outer space news. All data is sourced from an
              external API. Additionally, it features a forum where users can
              discuss topics related to the theme of the website (it does not
              have a server).
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/javierbiselli/tup-lc2-votacion-app"
                  rel="noreferrer"
                >
                  =&gt; App code
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://javierbiselli.github.io/tup-lc2-votacion-app/"
                  rel="noreferrer"
                >
                  =&gt; App link
                </a>
              </li>
            </ul>
          </>
        );
      case "CYM":
        return (
          <>
            <p className={styles.description}>
              Cym is a large-scale management system for an Argentine company
              that exports industrial machines of all kinds. I work on this
              project as a software developer for a local company, focusing on
              both the front-end and back-end using Angular and C#.
            </p>
          </>
        );
      default:
        break;
    }
  };

  return (
    <div>
      <h2>{selectedProject}</h2>
      {renderSwitch()}
    </div>
  );
};

export default ProjectDetails;
