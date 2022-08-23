import React from 'react';
import Logo from '../assets/Logo-officiel.png';
import Nav from './Nav';

function Header(props) {
    return (
        <div className='div-header'>
            <img src={Logo}></img>
            <Nav />
        </div>
    );
}

export default Header;