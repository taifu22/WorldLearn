import React, { useEffect, useState }from 'react';
import QuizComponent from '../components/QuizComponent';

function QuizCapitales(props) {

    const [datapaysInfo, setDataPaysInfo] = useState();
    const [toggleLength, setToggleLength] = useState(false);
    let [count, setCount] = useState(2)
    let [timer, setTimer1] = useState();
    const [arrayCapitales, setArrayCapitales] = useState([]);
    let [flagPays, setFlagPays] = useState();
    let [namePays, setNamepays] = useState();
    let [capital, setcapital] = useState([]);
    const [randomnum1, setRandomNum1] = useState(1);
    const [randomnum2, setRandomNum2] = useState(2);
    const [randomnum3, setRandomNum3] = useState(3);
    const [randomnum4, setRandomNum4] = useState(4);
    let randomNumber;
    let [randomNumberArray, setRandomNumberArray] = useState([]);

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

    //useEffect(() => console.log(namePays, capital), [namePays, capital]);

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

    function entierAleatoire(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function StartQuiz() {
        randomNumberscChoicie(4)
        randomNumber = entierAleatoire(0, 249);
        if (datapaysInfo && !arrayCapitales.length) {
            datapaysInfo.map(item => {
                if (item.capital[0].length > 2) {
                    arrayCapitales.push({id:item.cca3, name:item.name.common, capital:item.capital[0]});   
                }
            })
        }
        setNamepays(arrayCapitales[randomNumber].name);
        setFlagPays(`/data/${arrayCapitales[randomNumber].id}.svg`);

        setcapital([0]);
        let randomNumber1 = entierAleatoire(0, 244);
        let randomNumber2 = entierAleatoire(0, 244);
        let randomNumber3 = entierAleatoire(0, 244);
        
        arrayCapitales.map((item, index) => {
            if (item.name === arrayCapitales[randomNumber].name) {
                setcapital(capital =>[...capital, item.capital]);
            } else if (index === randomNumber1) {
                setcapital(capital =>[...capital, item.capital]);
            } else if (index === randomNumber2) {
                setcapital(capital =>[...capital, item.capital]);
            } else if (index === randomNumber3) {
                setcapital(capital =>[...capital, item.capital]);
            }
        })
    }

    const NextQuiz = () => {
        const newIntervalId = setInterval(() => {
            setCount(count-=1)
            console.log(count);
            if (count === 0) {
                clearInterval(newIntervalId);
                setCount(2);
                StartQuiz();
                return;
              }
          }, 1000);
    }

    // function NextQuiz() {
    //     handleClick();
    //     StartQuiz();
    // }

    return (
        <div className='div-quizCapitales'>
            <div style={toggleLength ? {justifyContent:'space-between', flexDirection:'row'} : {display:'flex'}} className='header-quiz'>
                <h1 style={toggleLength ? {display:'none'} : {display:'block'}}>Choisissez le nombre de questions</h1>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>10 questions et 1 minute 40 de temps</button>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>15 questions et 2 minute 30 de temps</button>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} className='hover-button'>30 questions et 4 minute 20 de temps</button>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} onClick={()=>{setToggleLength(!toggleLength);StartQuiz();}}>Demarrer le quiz</button>
                <button style={toggleLength ? {display:'block', marginBottom:'90px'} : {display:'none'}} onClick={()=>NextQuiz()}>Restart new quiz</button>
                <p style={toggleLength ? {display:'block'} : {display:'none'}}>timer {}</p>
                <button style={toggleLength ? {display:'block', marginBottom:'90px'} : {display:'none'}} onClick={()=>NextQuiz()}>Question suivante</button>
            </div>
            {capital  && namePays && flagPays && randomnum1 && randomnum2
            && randomnum3 && randomnum4 && 
            <QuizComponent name={namePays} flag={flagPays} toggle={toggleLength} cap={capital} random1={randomnum1}
              random2={randomnum2} random3={randomnum3} random4={randomnum4} />}
        </div>
    );
}

export default QuizCapitales;