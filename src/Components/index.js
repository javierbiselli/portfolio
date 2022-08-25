import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from "./Projects/Projects";
import "./index.css";

const Index = () => {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
      <Projects></Projects>
    </div>
  );
};

export default Index;
