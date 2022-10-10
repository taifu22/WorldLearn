import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return ( 
        <div className='ul-nav'> 
                <p onClick={props.toggle} className='p-nav'><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="/">Accueil</Link></p>
                <p onClick={props.toggle} className='p-nav'><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="quiz">Quiz</Link></p>
                <p onClick={props.toggle} className='p-nav'><Link style={{color:'#FFFFFF' , textDecoration:'none'}} to="about">A propos</Link></p>
        </div>
    );
} 

export default Nav;