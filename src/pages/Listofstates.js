import React, { useState, useEffect } from 'react';
import Africa from '../assets/Africa.png';
import Asia from '../assets/Asia.png';
import Americas from '../assets/Americas.png';
import Europe from '../assets/Europe.png';
import Oceania from '../assets/Oceania.png';
import DropDown from '../components/DropDown';
import World from '../assets/World.png';
import Lightbox from '../components/Lightbox';

function Listofstates(props) {

    const [toggleWorld, setToggleWorld] = useState(true);
    const [toggleContinent, setToggleContinent] = useState(false);
    const [toggleP, setToggleP] = useState(false);
    const [dataPaysinfo, setDataPaysInfo] = useState();
    const [dataAfrica, setDataAfrica] = useState([]);
    const [dataAsia, setDataAsia] = useState([]);
    const [dataAmericas, setDataAmericas] = useState([]);
    const [dataEurope, setDataEurope] = useState([]);
    const [dataOceania, setDataOceania] = useState([]);
    const [dataWorld, setDataWorld] = useState([]);
    let continents = [
        {image: Africa, data: dataAfrica, title: 'Africa'},
        {image: Asia, data: dataAsia, title: 'Asia'},
        {image: Americas, data: dataAmericas, title: 'Americas'},
        {image: Europe, data: dataEurope, title: 'Europe'},
        {image: Oceania, data: dataOceania, title: 'Oceania'}
    ]

    useEffect(() => {
        fetch('./countries.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
        .then(response => { 
         return response.json()
        })
        .then(data => {
         setDataPaysInfo(data);
        })
      }, [])

    function ArrayContinents() {
        setToggleP(!toggleP); 
    }

    if (dataPaysinfo && !dataAfrica.length && !dataAsia.length && !dataAmericas.length && !dataEurope.length && !dataOceania.length && !dataWorld.length) {
        dataPaysinfo.map(item => {
            if (item.region === 'Africa') {
                setDataAfrica(dataAfrica => [...dataAfrica, {name:item.name.common, id:item.cca3}]);
            } else if (item.region === 'Asia') {
                setDataAsia(dataAsia => [...dataAsia, {name:item.name.common, id:item.cca3}]);
            } else if (item.region === 'Americas') {
                setDataAmericas(dataAmericas => [...dataAmericas, {name:item.name.common, id:item.cca3}]);
            } else if (item.region === 'Europe') {
                setDataEurope(dataEurope => [...dataEurope, {name:item.name.common, id:item.cca3}]);
            } else if (item.region === 'Oceania') {
                setDataOceania(dataOceania => [...dataOceania, {name:item.name.common, id:item.cca3}]);
            }
            setDataWorld(dataWorld => [...dataWorld, {name:item.name.common, id:item.cca3}]);
        })
    }

    function handleWorld() {
        setToggleWorld(!toggleWorld);
        setToggleContinent(!toggleContinent);
    }

    return dataPaysinfo && (
        <div className='div-listofpays'>
            {toggleWorld && <div className='div-world'>
                 <img className={toggleP ? 'img-world-list-none' : 'img-world-list'} src={World}></img>
                 <DropDown title={'World States'} pays={dataWorld} func={ArrayContinents}/>
                 <p className={toggleP ? 'p-world-none' : 'p-world'}>
                    Passer à la liste des pays par continents
                    <i onClick={handleWorld} className="fa fa-solid fa-chevron-right"></i>
                </p>
            </div>}
            {toggleContinent && <div className='div-continents'>
                <Lightbox toggle={toggleP} datas={continents} func={ArrayContinents}/> 
            </div>}
            {toggleContinent && <p className={toggleP ? 'p-continent-none' : 'p-continent'}>
                    <i onClick={handleWorld} className="fa fa-solid fa-chevron-left"></i>
                    Passer à la recherche des pays classique
            </p>}
        </div>
    );
}

export default Listofstates;