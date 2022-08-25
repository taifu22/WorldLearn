import React, { useEffect, useState }from 'react';

function QuizCapitales(props) {

    const [datapaysInfo, setDataPaysInfo] = useState();
    const [toggleLength, setToggleLength] = useState(false);
    let [timer, setTimer] = useState(5);
    const [arrayCapitales, setArrayCapitales] = useState([]);
    let [flagPays, setFlagPays] = useState();
    let [namePays, setNamepays] = useState();
    let [capital, setcapital] = useState([]);
    //const [randomNumber, setRandomNumber] = useState();
    const [randomnum1, setRandomNum1] = useState(1);
    const [randomnum2, setRandomNum2] = useState(2);
    const [randomnum3, setRandomNum3] = useState(3);
    const [randomnum4, setRandomNum4] = useState(4);
    let interval;
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
        //console.log(randomNumberArray);
    }

    function entierAleatoire(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (datapaysInfo && !arrayCapitales.length) {
        datapaysInfo.map(item => {
            if (item.capital[0].length > 2) {
                arrayCapitales.push({id:item.cca3, name:item.name.common, capital:item.capital[0]});   
            }
        })
    }

    function StartQuiz() {
        randomNumberscChoicie(4)
        let randomNumber = entierAleatoire(0, 249);
        console.log(randomNumber);
        setNamepays(arrayCapitales[randomNumber].name);
        setFlagPays(`/data/${arrayCapitales[randomNumber].id}.svg`);
        //console.log(namePays)
        //setRandomNumber(entierAleatoire(0, 249));
        // if (datapaysInfo && !arrayCapitales.length) {
        //     datapaysInfo.map(item => {
        //         if (item.capital[0].length > 2) {
        //             arrayCapitales.push({id:item.cca3, name:item.name.common, capital:item.capital[0]});   
        //         }
        //     })
        // }
        // setNamepays(arrayCapitales[randomNumber].name);
        // setFlagPays(`/data/${arrayCapitales[randomNumber].id}.svg`);
            // interval = setInterval(() => {
            //     setTimer(timer-=1);
            //     if (timer === 0) {
            //         clearInterval(interval)
            //     }
            // }, 1000);
            capital.push(0);
            let randomNumber1 = entierAleatoire(0, 244);
            let randomNumber2 = entierAleatoire(0, 244);
            let randomNumber3 = entierAleatoire(0, 244);
    
            arrayCapitales.map((item, index) => {
                if (item.name === arrayCapitales[randomNumber].name) {
                    capital.push(item.capital);
                } else if (index === randomNumber1) {
                    capital.push(item.capital);
                } else if (index === randomNumber2) {
                    capital.push(item.capital);
                } else if (index === randomNumber3) {
                    capital.push(item.capital);
                }
            })
            //console.log(capital);
            //randomNumberscChoicie(4)
    }

    function RestartQuiz() {
        // clearInterval(interval);
        // setTimer(5);
        //setArrayCapitales([]);
        //setFlagPays();
        //setNamepays();
        capital=[];
        //setRandomNum1('');
        //setRandomNum2('');
        //setRandomNum3('');
        //setRandomNum4('');
        randomNumberArray =[];
        StartQuiz();
        console.log(namePays);
    }

    return (
        <div className='div-quizCapitales'>
            <div className='header-quiz'>
                <button style={toggleLength ? {display:'none'} : {display:'block'}} onClick={()=>{
                                                                                                   console.log(arrayCapitales);
                                                                                                   setToggleLength(!toggleLength);
                                                                                                   StartQuiz();
                                                                                                 }}>Demarrer le quiz</button>
                <button style={toggleLength ? {display:'block'} : {display:'none'}} onClick={()=>{
                                                                                                  //setRandomNumber(entierAleatoire(0, 249));
                                                                                                  RestartQuiz()
                                                                                                  }}>Restart new quiz</button>
                <div>
                    <p>timer {timer}</p>
                </div>
            </div>
            {capital  && namePays && flagPays && randomnum1 && randomnum2
            && randomnum3 && randomnum4 && <>
            <div className='quiz-body'>
                <img src={flagPays}></img> 
                <p>{namePays}</p>
            </div>
            <div className='responses'>
                <div style={toggleLength ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button>{capital[randomnum1]}</button>
                    <button>{capital[randomnum2]}</button>
                </div>
                <div style={toggleLength ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button>{capital[randomnum3]}</button>
                    <button>{capital[randomnum4]}</button>
                </div>
            </div></>}
        </div>
    );
}

export default QuizCapitales;