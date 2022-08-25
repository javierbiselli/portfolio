import { useEffect } from "react";
import "./App.css";
import Index from "./Components";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="App">
      <Index />
    </div>
  );
};

export default App;
