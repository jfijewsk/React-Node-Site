import React from 'react'
import './NavbarElements'
import {NavbarLogo } from './NavbarElements'
import '../CSS/Navbar.css'
import '../Assests/fonts/Montserrat-Regular.ttf'
import CircleFace from '../Assests/images/Sue.png'

/* <img src={CircleFace} alt="logo" className="navbar-circleface" /> */


const Navbar = () => {
    return (

        <header className="header">
        <nav className="navbar">
            <div className='nav-logo-container'>
                <img src={CircleFace} className="navbar-circleface" />
                <a href="#" className="nav-logo">James Fijewski</a>
            </div >
            <ul className="nav-menu">
                <li className="nav-item">
                    <a href="#" className="nav-link">Hobbies</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Resume</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Site Details</a>
                </li>

            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
</header>
    )
}

export default Navbar




