import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    <li className="dropdown current">
                        <Link to={ `/`}>Home</Link>
                    </li>
                    <li className="dropdown">
                        <Link to={ `/about`}>About</Link>
                        
                    </li>
                    <li className="dropdown">
                        <Link to={ `/account`}>Account</Link>
                       
                    </li>
                    <li className="dropdown">
                        <Link to={ `/money-deposit`}>Money Deposit/Withdrawal</Link>
                        
                    </li>
                    <li className="dropdown">
                        <Link to={ `/platform`}>Platforms</Link>
                        
                    </li>
                    <li><Link to={ `/open-account`}>Open Account</Link></li>
                    <li><Link to={ `/contact`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


