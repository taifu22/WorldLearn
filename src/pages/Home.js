import React from 'react';
import imgCarte from '../assets/Worldmap.JPG'
import imgContinents from '../assets/Continets-removebg-preview.png';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className='div-home'>
            <div className='div-container'>
                <div className='carte-interactive'>
                    <h1>Carte du monde interactive avec les pays et les états</h1>
                    <img src={imgCarte}></img>
                    <button><Link style={{textDecoration:'none', color:'white'}} to="/pageworldmap">Acceder</Link></button>
                </div>
                <div className='list-pays'>
                    <h1>Liste des continents et des pays du monde</h1>
                    <img src={imgContinents}></img>
                    <button><Link style={{textDecoration:'none', color:'white'}} to="/listofstates">Acceder</Link></button>
                </div>
            </div>
        </div> 
    );
}

export default Home;