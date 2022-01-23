import React, { useState } from "react";
import '../CSS/Navbar.css';
import '../Assests/fonts/Montserrat-Regular.ttf';
import CircleFace from '../Assests/images/Sue.png';
import { Link } from 'react-router-dom';


export default function Navbar() {

    // Hide navbar by defualt
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (

        <div>
            <header className="header">
                <nav className="navbar">
                    <div className='nav-logo-container'>
                    <Link to="/login">
                        <img src={CircleFace} className="navbar-circleface"/>
                    </Link>    
                        <Link className='nav-logo' to="/">James Fijewski</Link>
                    </div >

                    {/* Mobile nav-menu open or close */}
                    <ul className={`nav-menu ${open ? "open" : ""}`}>
                        <li className="nav-item">
                            <Link to="/aboutMe" className="nav-link" onClick={toggle}>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resume" className="nav-link" onClick={toggle}>Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/siteDetails" className="nav-link" onClick={toggle}>Site Details</Link>
                        </li>

                    </ul>

                    <button className={`hamburger ${open ? "open" : ""}`} onClick={() => {
                        setOpen(!open);
                    }}>
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>

                    </button>
                </nav>
            </header>

        </div>

    )
}








