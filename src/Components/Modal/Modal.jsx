import React from "react";
import styles from "./modal.module.css";
import { motion } from "framer-motion";

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      className={styles.shade}
    >
      <motion.div
        initial={{
          y: 800,
        }}
        animate={{
          y: 0,
          transition: {
            duration: 0.3,
          },
        }}
        className={styles.billboard}
      >
        <motion.button
          initial={{
            x: 800,
          }}
          animate={{
            x: 0,
            transition: {
              duration: 0.3,
            },
          }}
          onClick={handleClose}
          className={styles.btnX}
        >
          X
        </motion.button>
        <motion.div
          initial={{
            x: 800,
          }}
          animate={{
            x: 0,
            transition: {
              duration: 0.4,
              delay: 0.1,
            },
          }}
          className={styles.content}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
