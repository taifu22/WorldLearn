import React from 'react';
import QuizGame from '../assets/quiz_game.JPG';
import MemoryGame from '../assets/memory_game.JPG'
import { Link } from 'react-router-dom';

function Jeux(props) {
    return (
        <div className='div-quiz-container'>
            <div className='div-quiz'>
                <div className='quiz-capitales'>
                    <h2>Quiz</h2>
                    <img src={QuizGame}></img>
                    <button><Link style={{textDecoration:'none', color:'white'}} to="/quiz">Acceder</Link></button>
                </div>
                <div className='quiz-drapeaux'>
                    <h2>Memory game</h2>
                    <img src={MemoryGame}></img>
                    <button><Link style={{textDecoration:'none', color:'white'}} to="/memorygame">Acceder</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Jeux;