import { useState } from 'react';
import './header.css'

const Header = () => {
    const [headerBackground, setHeaderBackground] = useState(false)

    const changeBackground = () => {
       if (window.scrollY >= 80) {
            setHeaderBackground(true);
       } else {
        setHeaderBackground(false);
       }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <div className={headerBackground ? 'headerBox active' : 'headerBox'}>
            <header className='headerContainer'>
                <div className='h1Container'>
                    <h1>JAVIER BISELLI</h1>
                </div>
                <ul className='buttonContainer'>
                    <li><button>MY PROJECTS</button></li>
                    <li><button>RESUME</button></li>
                    <li><button>CONTACT</button></li>
                    <div className="languageContainer">
                        <select name="language" id="language">
                            <option className={headerBackground ? 'active' : 'inactive'} value="english">English</option>
                            <option className={headerBackground ? 'active' : 'inactive'} value="espanol">Español</option>
                        </select>
                    </div>
                </ul>
            </header>
        </div>
    )
};

export default Header;