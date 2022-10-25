import React from 'react';
import Logo from '../assets/Logo-officiel.png';
import Nav from './Nav';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {  

    const [toggle, setToggle] = useState(false);
    function handleToggle() {
        setToggle(!toggle) 
    } 

    return (
        <div className='div-header'>
            <Link style={{color:'white' , textDecoration:'none'}} to={"/"}><img src={Logo}></img></Link>
            <div className='header-nav'>
                <Nav /> 
            </div>
            <div className='header-nav-responsive'>
                <i onClick={()=>handleToggle()} className="fas fa-solid fa-bars"></i>
                {toggle ? <Nav toggle={() => setToggle(!toggle)} /> : ""}
            </div>
        </div>
    );
} 

export default Header;