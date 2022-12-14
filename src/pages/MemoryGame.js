import React, {useState} from 'react';
import MemoryGamecards from '../components/MemoryGamecards';

function MemoryGame(props) {

    const [beginner, setBeginner] = useState(false);
    const [intermediate, setIntermediate] = useState(false);
    const [expert, setExpert] = useState(false);
    const [buttonNone, setButtonNone] = useState(false);
    const [beginnerArrayHide, setBeginnerArrayHide] = useState([]);
    const [beginnerArrayShow1, setBeginnerArrayShow1] = useState([]);
    const [intermediateArrayHide, setIntermediateArrayHide] = useState([]);
    const [intermediateArrayShow1, setIntermediateArrayShow1] = useState([]);
    const [expertArrayHide, setExpertArrayHide] = useState([]);
    const [expertArrayShow1, setExpertArrayShow1] = useState([]);
    const [randomNumberArray1, setRandomNumberArray1] = useState();
    let beginnerArrayShow = [];
    let intermediateArrayShow = [];
    let expertArrayShow = [];
    let randomNumberArray = []; 
    let numberRandom;
    let oneCard;
    let nameOfState;

    function arrayType(num, level, setarray1, setarrayHide, setarrayShow1, arrayShow) {
        randomNumberscChoicie(num);
        setarray1(randomNumberArray)
        for (let i = 1; i <= num; i++) {
            setarrayHide(beginnerArray => [...beginnerArray, `/memory/Hidden_card.png`])
        }
        randomNumberArray.map(e => {
            oneCard = `/memory/${level}/image_${e}.png`;
            nameOfState = `image_${e}.png`;
            arrayShow.push({oneCard, nameOfState});
        })
        setarrayShow1(arrayShow)
    }

    function StartMemoryGame() {
        if (beginner) {
            arrayType(12, 'beginner', setRandomNumberArray1, setBeginnerArrayHide, setBeginnerArrayShow1, beginnerArrayShow);
        } else if (intermediate) {
            arrayType(20, 'intermediate', setRandomNumberArray1, setIntermediateArrayHide, setIntermediateArrayShow1, intermediateArrayShow);
        } else if (expert) {
            arrayType(30, 'expert', setRandomNumberArray1, setExpertArrayHide, setExpertArrayShow1, expertArrayShow);
        }
    }

    //function avec la boucle qui genere des nombres aleatoires selon le choix de niveau
    function randomNumberscChoicie(num) {
        for (let i = 0; i < 250; i++) {
            let added1 = false;
            numberRandom = Math.floor(Math.random() * num) + 1;
            do {
                if (!randomNumberArray.includes(numberRandom)) {
                        
                randomNumberArray.push(numberRandom);
                added1 = true; 
                }
            } while ((added1 = false)); 
        }
    } 

    return (
        <div className='div-memoryGame' style={{maxHeight:'1000px'}}>
            <h2 style={buttonNone ? {display:'none'} : {display:'block'}}  className="h2">Choisissez le niveau du jeu</h2>
            <div className='button-memoryGame'>
                <button onClick={()=> {setBeginner(true);setIntermediate(false);setExpert(false)}} style={buttonNone ? {display:'none'} : {display:'block'}} >Beginner</button>
                <button onClick={()=> {setIntermediate(true);setBeginner(false);setExpert(false)}} style={buttonNone ? {display:'none'} : {display:'block'}} className="intermediate">Intermediate</button>
                <button onClick={()=> {setExpert(true);setBeginner(false);setIntermediate(false)}} style={buttonNone ? {display:'none'} : {display:'block'}} className="expert">Expert</button>
                <button className={beginner ? 'button-green' : intermediate ? 'button-yellow' : expert ? 'button-red' : ""} style={buttonNone ? {display:'none'} : {display:'block', marginBottom: '50px'}} onClick={()=>{setButtonNone(!buttonNone);StartMemoryGame();}}>Demarrer le jeu</button>
            </div>
            {beginner && buttonNone && <MemoryGamecards num={6} arrayShow={beginnerArrayShow1} arrayHide={beginnerArrayHide} random={randomNumberArray1} level={'beginner'}/>}
            {intermediate && buttonNone && <MemoryGamecards num={10} arrayShow={intermediateArrayShow1} arrayHide={intermediateArrayHide} random={randomNumberArray1} level={'intermediate'}/>}
            {expert && buttonNone && <MemoryGamecards num={15} arrayShow={expertArrayShow1} arrayHide={expertArrayHide} random={randomNumberArray1} level={'expert'}/>}
        </div>
    );
}

export default MemoryGame; 