import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return ( 
        <div className='ul-nav'> 
                <p className='p-nav'><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="/">Accueil</Link></p>
                <p className='p-nav'><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="quiz">Quiz</Link></p>
                <p className='p-nav'><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="about">A propos</Link></p>
        </div>
    );
} 

export default Nav;