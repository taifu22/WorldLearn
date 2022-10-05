import React from 'react';
import Logo from '../assets/Logo-officiel.png';
import Nav from './Nav';
import { useState } from 'react';

function Header(props) { 

    const [toggle, setToggle] = useState(false);
    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <div className='div-header'>
            <img src={Logo}></img>
            <div className='header-nav'>
                <Nav /> 
            </div>
            <div className='header-nav-responsive'>
                <i onClick={()=>handleToggle()} className="fas fa-solid fa-bars"></i>
                {toggle ? <Nav /> : ""}
            </div>
        </div>
    );
} 

export default Header;