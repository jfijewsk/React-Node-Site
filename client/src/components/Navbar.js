import React, { useState } from "react"
import '../CSS/Navbar.css'
import '../Assests/fonts/Montserrat-Regular.ttf'
import CircleFace from '../Assests/images/Sue.png'



export default function Navbar(){
    
    // Hide navbar by defualt
    const [open, setOpen] = useState(false);

    return (

<div>
        <header className="header">
        <nav className="navbar">
            <div className='nav-logo-container'>
                <img src={CircleFace} className="navbar-circleface" />
                <a href="#" className="nav-logo">JAMES FIJEWSKI</a>
            </div >

            {/* Mobile nav-menu open or close */}
            <ul className={`nav-menu ${open ? "open" : ""}`}>
                <li className="nav-item">
                    <a href="#" className="nav-link">About Me</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Site Details</a>
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








