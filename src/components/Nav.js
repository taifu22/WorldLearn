import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return ( 
        <div> 
            <ul className='ul-nav'>
                <li><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="/">Accueil</Link></li>
                <li><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="quiz">Quiz</Link></li>
                <li><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="about">A propos</Link></li>
            </ul>
        </div>
    );
}

export default Nav;