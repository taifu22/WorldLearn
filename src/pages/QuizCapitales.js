import React, { useEffect, useState }from 'react';
import QuizComponent from '../components/QuizComponent';
import QuizResult from './QuizResult';

function QuizCapitales(props) {

    const [datapaysInfo, setDataPaysInfo] = useState();
    const [toggleLength, setToggleLength] = useState(false);
    let [count, setCount] = useState(2);
    let [countResponses, setCountResponses] = useState(0);
    let [timer10, setTimer10] = useState(100);
    let [timer15, setTimer15] = useState(150);
    let [timer30, setTimer30] = useState(300);
    const [arrayCapitales, setArrayCapitales] = useState([]);
    let [arrayResponses, setArrayResponses] = useState([]);
    let [flagPays, setFlagPays] = useState();
    let [namePays, setNamepays] = useState();
    let [capital, setcapital] = useState([]);
    const [randomnum1, setRandomNum1] = useState(1);
    const [randomnum2, setRandomNum2] = useState(2);
    const [randomnum3, setRandomNum3] = useState(3);
    const [randomnum4, setRandomNum4] = useState(4);
    let randomNumber;
    let [randomNumberArray, setRandomNumberArray] = useState([]);
    const [color, setColor] = useState(false);
    const [toggle10Responses, setToggle10Responses] = useState(false);
    const [toggle15Responses, setToggle15Responses] = useState(false);
    const [toggle30Responses, setToggle30Responses] = useState(false);
    const [green, setgreen] = useState(false);

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

    //useEffect(() => console.log(timer), [timer]);

    function randomNumberscChoicie(num) {
        for (let i = 0; i < 250; i++) {
          let added1 = false;
          let randomnum = Math.floor(Math.random() * num) + 1 ;
          if (randomNumberArray.length) {
            setRandomNumberArray([]);
          }
          do {
            if (!randomNumberArray.includes(randomnum)) {
                    
              randomNumberArray.push(randomnum);
              added1 = true;
            }
          } while ((added1 = false));
        }
        setRandomNum1(randomNumberArray[0])
        setRandomNum2(randomNumberArray[1])
        setRandomNum3(randomNumberArray[2])
        setRandomNum4(randomNumberArray[3])
    }

    function StartQuiz() {
        randomNumberscChoicie(4)
        let arrayrandom = Object.keys([...new Array(244)]).sort( ()=>Math.random()-0.5 );
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
        console.log(arrayCapitales);
        setNamepays(arrayCapitales[randomNumber].name);
        setFlagPays(`/data/${arrayCapitales[randomNumber].id}.svg`);

        setcapital([0]);
        
        arrayCapitales.map((item, index) => {
            if (item.name === arrayCapitales[randomNumber].name) {
                setcapital(capital =>[...capital, {green:item.capital, color:'green'}]);
                setArrayResponses(arrayResponses =>[...arrayResponses, {capitale :item.capital, nom:item.name, id:item.id}]);
            } else if (index == randomNumber1) {
                setcapital(capital =>[...capital, {green:item.capital, color:''}]);
            } else if (index == randomNumber2) {
                setcapital(capital =>[...capital, {green:item.capital, color:''}]);
            } else if (index == randomNumber3) {
                setcapital(capital =>[...capital, {green:item.capital, color:''}]);
            }
        })
        setCountResponses(countResponses+=1);
    }

    function toggleColor() {
        setColor(!color);
    }

    const NextQuiz = () => {
        const newIntervalId = setInterval(() => {
            setCount(count-=1)
            if (count === 0) {
                clearInterval(newIntervalId);
                setCount(2);
                toggleColor();
                StartQuiz();
                setgreen(false);
                return;
              }
          }, 1000);
    }

    function startTimer() {
        if (toggle10Responses) {
            const newIntervalId = setInterval(() => {
                setTimer10(timer10-=1)
                if (timer10 === 0) {
                    clearInterval(newIntervalId);
                    return;
                }
            }, 1000);
        } else if (toggle15Responses) {
            const newIntervalId = setInterval(() => {
                setTimer15(timer15-=1)
                if (timer15 === 0) {
                    clearInterval(newIntervalId);
                    return;
                }
            }, 1000);
        } else if (toggle30Responses) {
            const newIntervalId = setInterval(() => {
                setTimer30(timer30-=1)
                if (timer30 === 0) {
                    clearInterval(newIntervalId);
                    return;
                }
            }, 1000);
        }   
    }

    if (toggle10Responses && countResponses == 10 || timer10 === 0) {
        //arrayResponses.pop();
        return <QuizResult data={arrayResponses}/>
    } else if (toggle15Responses && countResponses == 15) {
        arrayResponses.pop();
        return <QuizResult data={arrayResponses}/>
    } else if (toggle30Responses && countResponses == 30) {
        arrayResponses.pop();
        return <QuizResult data={arrayResponses}/>
    }

    return (
        <div className='div-quizCapitales'>
            <div style={toggleLength ? {justifyContent:'space-between', flexDirection:'row'} : {display:'flex'}} className='header-quiz'>
                <h1 style={toggleLength ? {display:'none'} : {display:'block'}}>Choisissez le nombre de questions</h1>
                <button onClick={()=>{setToggle10Responses(true);setToggle15Responses(false);setToggle30Responses(false)}} style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>10 questions et 1 minute 40 de temps</button>
                <button onClick={()=>{setToggle15Responses(true);setToggle10Responses(false);setToggle30Responses(false)}} style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>15 questions et 2 minute 30 de temps</button>
                <button onClick={()=>{setToggle30Responses(true);setToggle15Responses(false);setToggle10Responses(false)}} style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>30 questions et 4 minute 20 de temps</button>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} onClick={()=>{setToggleLength(!toggleLength);startTimer();StartQuiz();}}>Demarrer le quiz</button>
                <button style={toggleLength ? {display:'block', marginBottom:'90px'} : {display:'none'}} onClick={()=>NextQuiz()}>Restart new quiz</button>
                <p style={toggleLength ? {display:'block'} : {display:'none'}}>timer {toggle10Responses ? Math.floor(timer10/60)+":"+timer10%60 : toggle15Responses ? Math.floor(timer15/60)+":"+timer15%60 : toggle30Responses ? Math.floor(timer30/60)+":"+timer30%60 : ""}</p>
                <button style={toggleLength ? {display:'block', marginBottom:'90px'} : {display:'none'}} onClick={()=>{setgreen(true);NextQuiz()}}>Question suivante</button>
            </div>
            {capital  && namePays && flagPays && randomnum1 && randomnum2
            && randomnum3 && randomnum4 && 
            <QuizComponent color={green} name={namePays} flag={flagPays} toggle={toggleLength} cap={capital} random1={randomnum1}
              random2={randomnum2} count={countResponses} random3={randomnum3} random4={randomnum4} />}
        </div>
    );
}

export default QuizCapitales;