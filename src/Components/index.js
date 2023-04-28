import { motion } from "framer-motion";
import "./index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import backgroundvid from "../Assets/backgroundvid.mp4";
import { useState } from "react";
import Skills from "./Skills/Skills";

const Index = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };
  return (
    <div className="app">
      {!videoLoaded && (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )}

      <motion.video
        onLoadedData={handleVideoLoaded}
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

      {videoLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header></Header>
          <Main></Main>
          <Resume></Resume>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
