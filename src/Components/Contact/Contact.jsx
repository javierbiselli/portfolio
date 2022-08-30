import styles from "./contact.module.css";
import emailjs from "emailjs-com";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Z_ ]*$/)
      .messages({
        "string.pattern.base": "Name must contain only letters",
        "string.empty": "This field is required",
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
    message: Joi.string().required().messages({
      "string.empty": "Write your message",
    }),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),
  });

  const sendEmail = async (data) => {
    setIsLoading(true);
    emailjs
      .send("service_g2le82c", "template_ygrdrbb", data, "V61t4y1LnMzqdr-T4")
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          setShowModal(true);
        } else {
          alert(res.text);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className={styles.contactContainer} id="Contact">
      <div id="ContactSection" className={styles.contactSectionScroll}></div>
      <form onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.formContainer}>
          <h4>Contact me</h4>
          <div className={styles.inputContainer}>
            <div className={styles.singleInputContainer}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" {...register("name")} />
              <div className={styles.error}>{errors.name?.message}</div>
            </div>
            <div className={styles.singleInputContainer}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" {...register("email")} />
              <div className={styles.error}>{errors.email?.message}</div>
            </div>
          </div>
          <div className={styles.textArea}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              {...register("message")}
            ></textarea>
            <div className={styles.error}>{errors.message?.message}</div>
          </div>
          <div className={styles.loadingContainer}>
            <Loader show={isLoading} />
            <input type="submit" value="Send" className={styles.submitButton} />
          </div>
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
      <Modal isOpen={showModal} handleClose={() => setShowModal(false)}>
        Message send!
        <br />
        <br />
      </Modal>
    </section>
  );
};

export default Contact;
