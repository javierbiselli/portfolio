import { motion } from "framer-motion";
import "./index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import backgroundvid from "../Assets/backgroundvid.mp4";

const Index = () => {
  return (
    <div className="app">
      <motion.video
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.3,
          },
        }}
        autoPlay
        loop
        muted
        playsInline
        className="background"
      >
        <source src={backgroundvid} />
      </motion.video>
      <Header></Header>
      <Main></Main>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Index;
