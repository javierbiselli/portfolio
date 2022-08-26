import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from "./Projects/Projects";
import "./index.css";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

const Index = () => {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
    </div>
  );
};

export default Index;
