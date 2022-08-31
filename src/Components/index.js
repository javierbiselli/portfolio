import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from "./Projects/Projects";
import "./index.css";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";
import Skills from "../Skills/Skills";

const Index = () => {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
      <Resume></Resume>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default Index;
