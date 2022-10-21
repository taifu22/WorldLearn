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

    function arrayType(num, level, setarray1, setarrayHide, setarrayShow1, arrayShow) {
        randomNumberscChoicie(num);
            setarray1(randomNumberArray)
            for (let i = 1; i <= num; i++) {
                setarrayHide(beginnerArray => [...beginnerArray, `/memoryGame/Hidden_card.png`])
            }
            randomNumberArray.map(e => {
                oneCard = `/memoryGame/${level}/image_${e}.png`;
                arrayShow.push(oneCard)
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
        <div className='div-memoryGame'>
            <h2 style={buttonNone ? {display:'none'} : {display:'block'}}  className="h2">Choisissez le niveau du jeu</h2>
            <div className='button-memoryGame'>
                <button onClick={()=> {setBeginner(true);setIntermediate(false);setExpert(false)}} style={buttonNone ? {display:'none'} : {display:'block', backgroundColor:'green'}} className="beginner">Beginner</button>
                <button onClick={()=> {setBeginner(false);setIntermediate(true);setExpert(false)}} style={buttonNone ? {display:'none'} : {display:'block', backgroundColor:'#FFA808'}} className="intermediate">Intermediate</button>
                <button onClick={()=> {setBeginner(false);setIntermediate(false);setExpert(true)}} style={buttonNone ? {display:'none'} : {display:'block', backgroundColor:'red'}} className="expert">Expert</button>
                <button style={buttonNone ? {display:'none'} : {display:'block'}} onClick={()=>{setButtonNone(!buttonNone);StartMemoryGame();}}>Demarrer le quiz</button>
            </div>
            {beginner && buttonNone && <MemoryGamecards num={6} arrayShow={beginnerArrayShow1} arrayHide={beginnerArrayHide} random={randomNumberArray1} level={'beginner'}/>}
            {intermediate && buttonNone && <MemoryGamecards num={10} arrayShow={intermediateArrayShow1} arrayHide={intermediateArrayHide} random={randomNumberArray1} level={'intermediate'}/>}
            {expert && buttonNone && <MemoryGamecards num={15} arrayShow={expertArrayShow1} arrayHide={expertArrayHide} random={randomNumberArray1} level={'expert'}/>}
        </div>
    );
}

export default MemoryGame;