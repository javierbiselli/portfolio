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
        <NavBar navBar={navBar} setNavBar={setNavBar} />
        <>
          {!navBar ? (
            <div className="navBarContainer">
              <ul className="buttonContainer">
                <li>
                  <a href="#ProjectSection">MY PROJECTS</a>
                </li>
                {/* <li>
								<a href="#ResumeSection">RESUME</a>
							</li> */}
                <li>
                  <a href="#ContactSection">CONTACT</a>
                </li>
                <div className="languageContainer">
                  <select name="language" id="language">
                    <option value="english">English</option>
                    <option value="espanol">Español</option>
                  </select>
                </div>
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
