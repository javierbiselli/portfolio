import "./navBar.css";

const NavBar = ({ navBar }) => {
  const changeLanguage = (option) => {
    localStorage.setItem("lang", option.target.value);
    window.location.reload();
  };
  const lang = localStorage.getItem("lang") || "en";
  return (
    <>
      {navBar ? (
        <div className="navBarMenuContainer">
          <ul className="buttonMenuContainer">
            <li>
              <a href="#ProjectsSection">- My projects</a>
            </li>
            <li>
              <a href="#ProjectsSection">- Resume</a>
            </li>
            <li>
              <a href="#ProjectsSection">- Contact</a>
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
        </div>
      ) : (
        <div className="navBarContainer">
          <ul className="buttonContainer">
            <li>
              <a href="#ProjectsSection">MY PROJECTS</a>
            </li>
            <li>
              <a href="#ProjectsSection">RESUME</a>
            </li>
            <li>
              <a href="#ProjectsSection">CONTACT</a>
            </li>
            <div className="languageContainer">
              <select
                name="language"
                id="language"
                onChange={changeLanguage}
                value={lang}
              >
                <option value="english">English</option>
                <option value="espanol">Español</option>
              </select>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
