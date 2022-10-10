import React from 'react';
import Drapeaux from '../assets/drapeaux.jpg';
import Capitales from '../assets/capitales.JPG';
import { Link } from 'react-router-dom';

function Quiz(props) {
    return (
        <div className='div-quiz-container'>
            
            <div className='div-quiz'>
                <div className='quiz-capitales'>
                    <h2>Quiz avec les capitales du monde</h2>
                    <img src={Capitales}></img>
                    <button><Link style={{textDecoration:'none', color:'white'}} to="/quizcapitales">Acceder</Link></button>
                </div>
                <div className='quiz-drapeaux'>
                    <h2>Quiz avec les drapeaux du monde</h2>
                    <img src={Drapeaux}></img>
                    <button><Link style={{textDecoration:'none', color:'white'}} to="/quizdrapeaux">Acceder</Link></button>
                </div>
            </div>
        </div> 
    );
}

export default Quiz;