import styles from "./contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g2le82c",
        "template_ygrdrbb",
        e.target,
        "V61t4y1LnMzqdr-T4"
      )
      .then((res) => {
        res.status === 200 ? alert("Message send") : alert(res.text);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className={styles.contactContainer} id="Contact">
      <div id="ContactSection" className={styles.contactSectionScroll}></div>
      <form onSubmit={sendEmail}>
        <div className={styles.formContainer}>
          <h4>Contact me</h4>
          <div className={styles.inputContainer}>
            <div className={styles.singleInputContainer}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.singleInputContainer}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="textarea">Message</label>
            <textarea name="textarea" id="textarea"></textarea>
          </div>
          <input type="submit" value="Send" className={styles.submitButton} />
        </div>
      </form>
      <div className={styles.socialContainer}>
        <a
          href="https://github.com/javierbiselli"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/javier-biselli-2b8228236/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
