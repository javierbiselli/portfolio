import "./navBar.css";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ navBar }) => {
  return (
    <>
      <AnimatePresence>
        {navBar && (
          <motion.div
            className="navBarMenuContainer"
            key="navBarMenuContainer"
            initial={{
              x: 800,
            }}
            animate={{
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              x: 800,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <ul className="buttonMenuContainer">
              <li>
                <a href="#About">- About</a>
              </li>
              <li>
                <a href="#Skills">- Skills</a>
              </li>
              <li>
                <a href="#Projects">- Projects</a>
              </li>
              <li>
                <a href="#Contact">- Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
