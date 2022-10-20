import React, { useEffect, useState }from 'react';
import QuizComponent from '../components/QuizComponent';
import QuizResult from './QuizResult';
import { Link } from 'react-router-dom';

function QuizCapitales(props) {

    const [datapaysInfo, setDataPaysInfo] = useState();
    const [toggleLength, setToggleLength] = useState(false);
    let [count, setCount] = useState(1);
    let [countResponses, setCountResponses] = useState(0);
    let [timer10, setTimer10] = useState(100);
    let [timer15, setTimer15] = useState(150);
    let [timer30, setTimer30] = useState(300);
    const [arrayCapitales, setArrayCapitales] = useState([]);
    let [arrayResponses, setArrayResponses] = useState([]);
    let [InfoPays, setInfoPays] = useState({flag:"",name:"",capital:[]});
    const [randomnum, setRandomNum] = useState([1,2,3,4]);
    const [color, setColor] = useState(false);
    const [toggle10Responses, setToggle10Responses] = useState(false);
    const [toggle15Responses, setToggle15Responses] = useState(false);
    const [toggle30Responses, setToggle30Responses] = useState(false);
    const [green, setgreen] = useState(false);
    const [bleu, setbleu] = useState();
    const [arrayRightWrong, setArrayRightWrong] = useState([]);

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

    //useEffect(()=> {console.log(arrayRightWrong)}, [arrayRightWrong]);

  
    function randomNumberscChoicie() {
        setRandomNum([]);
        let randomNumberArray = Object.keys([...new Array(4)]).sort( ()=>Math.random()-0.5 );
        setRandomNum(randomnum => ([...randomnum, parseInt(randomNumberArray[0])+1, parseInt(randomNumberArray[1])+1, parseInt(randomNumberArray[2])+1, parseInt(randomNumberArray[3])+1]))
    }

    function StartQuiz() {
        console.log(__filename);
        randomNumberscChoicie()
        setInfoPays({flag:"",name:"",capital:[]});
        let arrayrandom = Object.keys([...new Array(199)]).sort( ()=>Math.random()-0.5 );
        let randomNumber = arrayrandom.pop();
        let randomNumber1 = arrayrandom.pop();
        let randomNumber2 = arrayrandom.pop();
        let randomNumber3 = arrayrandom.pop();
        if (datapaysInfo && !arrayCapitales.length) {
            datapaysInfo.map(item => {
                if (item.capital[0].length > 2) {
                    arrayCapitales.push({id:item.cca3, name:item.name.common, capital:item.capital[0]});   
                }
            })
        }

        setInfoPays(infoPays => ({...infoPays,name:arrayCapitales[randomNumber].name}));

        setInfoPays(infoPays => ({...infoPays,flag:`/data/${arrayCapitales[randomNumber].id}.svg`}));

        setInfoPays(infoPays => ({...infoPays,capital:[...infoPays.capital, 0]}));
        
        arrayCapitales.map((item, index) => {
            if (item.name === arrayCapitales[randomNumber].name) {
                setInfoPays(infoPays => ({...infoPays,capital:[...infoPays.capital, {green:item.capital, color:'green'}]}));
                setArrayResponses(arrayResponses =>[...arrayResponses, {capitale :item.capital, nom:item.name, id:item.id}]);
            } else if (index == randomNumber1) {
                setInfoPays(infoPays => ({...infoPays,capital:[...infoPays.capital, {green:item.capital, color:'red'}]}));
            } else if (index == randomNumber2) {
                setInfoPays(infoPays => ({...infoPays,capital:[...infoPays.capital, {green:item.capital, color:'red'}]}));
            } else if (index == randomNumber3) {
                setInfoPays(infoPays => ({...infoPays,capital:[...infoPays.capital, {green:item.capital, color:'red'}]}));
            }
        })
        setCountResponses(countResponses+=1);
    }

    function toggleColor() {
        setColor(!color);
    }

    function RightWrongResponses(params) {
        setArrayRightWrong(array => ([...array, params]))
    }

    const NextQuiz = () => {
        const newIntervalId = setInterval(() => {
            setCount(count-=1)
            if (count === 0) {
                clearInterval(newIntervalId);
                setCount(1);
                toggleColor();
                StartQuiz();
                setgreen(false);
                setbleu(true);
                return;
            }
        }, 1000);
    }

    function startTimer() {
        if (toggle10Responses) {
            const newIntervalId = setInterval(() => {
                //setTimer(timer => ({...timer, onehundred:timer.onehundred-1}));
                setTimer10(timer10-=1)
                if (timer10 === 0) {
                    clearInterval(newIntervalId);
                    return;
                }
            }, 1000);
        } else if (toggle15Responses) {
            const newIntervalId = setInterval(() => {
                setTimer15(timer15-=1);
                if (timer15 === 0.0) {
                    clearInterval(newIntervalId);
                    return;
                }
            }, 1000);
        } else if (toggle30Responses) {
            const newIntervalId = setInterval(() => {
                setTimer30(timer30-1)
                if (timer30 === 0) {
                    clearInterval(newIntervalId);
                    return;
                }
            }, 1000);
        }   
    }

    if (toggle10Responses && countResponses > 10 || timer10 === 0) {
        return <QuizResult data={arrayResponses} dataResponses={arrayRightWrong}/>
    } else if (toggle15Responses && countResponses > 15 || timer15 === 0) {
        return <QuizResult data={arrayResponses} dataResponses={arrayRightWrong}/>
    } else if (toggle30Responses && countResponses > 30 || timer15 === 0) {
        return <QuizResult data={arrayResponses} dataResponses={arrayRightWrong}/>
    }

    return (
        <div className='div-quizCapitales'>
            <div style={toggleLength ? {justifyContent:'space-between', flexDirection:'row'} : {display:'flex'}} className='header-quiz'>
                <h1 style={toggleLength ? {display:'none'} : {display:'block'}}>Choisissez le nombre de questions</h1>
                <button onClick={()=>{setToggle10Responses(true);setToggle15Responses(false);setToggle30Responses(false)}} style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>10 questions et 1 minute 40 de temps</button>
                <button onClick={()=>{setToggle15Responses(true);setToggle10Responses(false);setToggle30Responses(false)}} style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>15 questions et 2 minute 30 de temps</button>
                <button onClick={()=>{setToggle30Responses(true);setToggle15Responses(false);setToggle10Responses(false)}} style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>30 questions et 4 minute 20 de temps</button>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} onClick={()=>{setToggleLength(!toggleLength);startTimer();StartQuiz();}}>Demarrer le quiz</button>
                <button style={toggleLength ? {display:'block', marginBottom:'90px'} : {display:'none'}}><Link style={{color:'white' , textDecoration:'none'}} to="/quiz">Quitter le quiz</Link></button>
                <p style={toggleLength ? {display:'block'} : {display:'none'}}>timer {toggle10Responses ? Math.floor(timer10/60)+":"+timer10%60 : toggle15Responses ? Math.floor(timer15/60)+":"+timer15%60 : toggle30Responses ? Math.floor(timer30/60)+":"+timer30%60 : ""}</p>
                <button style={toggleLength ? {display:'block', marginBottom:'90px'} : {display:'none'}} onClick={()=>{setgreen(true);setbleu(false);NextQuiz()}}>Question suivante</button>
            </div>
            {InfoPays.capital  && InfoPays.name && InfoPays.flag && randomnum && 
            <QuizComponent colorgreen={green} colorbleu={bleu} name={InfoPays.name} flag={InfoPays.flag} toggle={toggleLength} cap={InfoPays.capital} random1={randomnum[0]}
              random2={randomnum[1]} count={countResponses} random3={randomnum[2]} random4={randomnum[3]} func={()=>setbleu(false)}
              toggle10={toggle10Responses} toggle15={toggle15Responses} toggle30={toggle30Responses} funcRight={(e) => RightWrongResponses(e)}/>}
        </div>
    );
}

export default QuizCapitales;