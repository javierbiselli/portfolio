import { useState } from "react";
import "./header.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={headerBackground ? "headerBox active" : "headerBox"}>
      <header className="headerContainer">
        <div className="h1Container">
          <h1>
            <a href="#home">JAVIER BISELLI</a>
          </h1>
        </div>
        <NavBar navBar={navBar} />
        <>
          {!navBar ? (
            <div className="navBarContainer">
              <ul className="buttonContainer">
                <li>
                  <a href="#About">ABOUT</a>
                </li>
                <li>
                  <a href="#Projects">PROJECTS</a>
                </li>
                <li>
                  <a href="#Contact">CONTACT</a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </>
        <button className="menuButton" onClick={() => setNavBar(!navBar)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </header>
    </div>
  );
};

export default Header;
