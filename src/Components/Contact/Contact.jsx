import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactContainer} id="Contact">
      <div id="ContactSection" className={styles.contactSectionScroll}></div>
      <form>
        <div className={styles.formContainer}>
          <h4>Contact me</h4>
          <div className={styles.inputContainer}>
            <div className={styles.singleInputContainer}>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className={styles.singleInputContainer}>
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="textarea">Message</label>
            <textarea name="textarea" id="textarea"></textarea>
          </div>
        </div>
      </form>
      <div></div>
    </section>
  );
};

export default Contact;
