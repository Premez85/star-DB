import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className="header--icon">Start DB</div>
            <ul className="header--nav">
                <li><span>People</span></li>
                <li><span>Planets</span></li>
                <li><span>Starships</span></li>
            </ul>
        </header>
    );
}

export default Header;