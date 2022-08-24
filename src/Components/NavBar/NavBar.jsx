import './navBar.css';

const NavBar = ({ navBar }) => {
    console.log(navBar)
    return (
        <>  {navBar ? (
            <div className='navBarMenuContainer'>
                <ul className='buttonMenuContainer'>
                    <li><button>- MY PROJECTS</button></li>
                    <li><button>- RESUME</button></li>
                    <li><button>- CONTACT</button></li>
                    <div className='languageMenuContainer'>
                        <select name="language" id="language">
                            <option value="english">English</option>
                            <option value="espanol">Español</option>
                        </select>
                    </div>
                </ul>
            </div>
        ) :
        (
            <div className='navBarContainer'>
                <ul className='buttonContainer'>
                    <li><button>MY PROJECTS</button></li>
                    <li><button>RESUME</button></li>
                    <li><button>CONTACT</button></li>
                    <div className='languageContainer'>
                        <select name="language" id="language">
                            <option value="english">English</option>
                            <option value="espanol">Español</option>
                        </select>
                    </div>
                </ul>
            </div>
        )}
        </>
    )
};

export default NavBar;