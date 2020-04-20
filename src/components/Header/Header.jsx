import React from 'react';

import '../../style.css';
const Header = () =>{
    return(
        <div className="header-main">
            <div className="container header-container">
                <div className="logo">Breaking<span className="logo-span">News</span></div>
                <ul className="ul-menu">
                    <li className="li-menu">
                        <div className="menu-item">Home</div>
                    </li>
                    <li className="li-menu"><div className="menu-item">News</div></li>
                    <li className="li-menu"><div className="menu-item">About</div></li>
                    <li className="li-menu"><div className="menu-item">Contact</div></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;