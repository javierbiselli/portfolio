import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <section>
        <p>
          Hi, i'm Javier, a full stack developer trainee, currently working on
          several projects and learning new tecnologies on the way.
          <br />
          <br />
          If you have any ideas for a project or want to work with me, please{" "}
          <button>contact me</button>
        </p>
      </section>
    </div>
  );
};

export default Main;
