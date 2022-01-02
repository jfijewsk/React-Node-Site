import React from 'react'
import CircleFace from '../Assests/images/Sue.png'

export const NavbarLogo = () => {

    return (
        <>
        <img src={CircleFace} alt="logo" className="navbarLogo" />
        <div className='navbarLogo'>
        <a href='/Home'>James Fijewski</a> 
        </div>
        </>
    )
}



