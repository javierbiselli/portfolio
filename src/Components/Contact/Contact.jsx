import styles from "./contact.module.css";
import emailjs from "emailjs-com";
import Joi from "joi";

const Contact = () => {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Z_ ]*$/)
      .messages({
        "string.pattern.base": "Name must contain only letters",
      })
      .required(),
    email: Joi.string()
      .required()
      .regex(
        /^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )
      .messages({
        "string.pattern.base": "Invalid email",
        "string.empty": "This field is required",
      })
      .required(),
    message: Joi.string().required(),
  });

  const isValid = async (e) => {
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
    console.log(formData);
    const isValid = await schema.validate(formData);
    if (isValid.error) {
      alert(isValid.error.details[0].message);
    } else {
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
    }
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
              {isValid() ? <div className={styles.error}>{}</div> : ""}
            </div>
            <div className={styles.singleInputContainer}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
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
