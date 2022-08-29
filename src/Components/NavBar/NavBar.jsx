import "./navBar.css";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = ({ navBar, setNavBar }) => {
  const changeLanguage = (option) => {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  };
  const lang = localStorage.getItem("lang") || "en";
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
                <a href="#ProjectSection">- Projects</a>
              </li>
              <li>
                <a href="#ResumeSection">- Skills</a>
              </li>
              <li>
                <a href="#ContactSection">- Contact</a>
              </li>
              <div className="languageMenuContainer">
                <select
                  name="language"
                  id="language"
                  onChange={changeLanguage}
                  value={lang}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                </select>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
