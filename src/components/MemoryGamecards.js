import React, {useState} from 'react';
import MemoryResult from '../pages/MemoryResult';


function MemoryGamecards(props) { 

    const [image1, setImage1] = useState();
    const [toggle, setToggle] = useState(false); 
    const [number1, setNumber1] = useState();
    const [count, setCount] = useState(0)
    const [arrayWin, setArrayWin] = useState([]);
    const [state, setState] = useState();
    let number2;
    let card2;
    let card1; 

    if ((props.level == 'expert' && count >= 30) || (props.level == 'beginner' && count >= 12) || (props.level == 'intermediate' && count >= 20)) {
        return <MemoryResult data={arrayWin} level={props.level}/>
    }

    return (
        <div className='container-memorygamecard'>
            <h1>Level : {props.level}</h1>
            <div className={props.level == 'intermediate' ? 'img-memoryGame-intermediate' : props.level == 'beginner' ? 'img-memoryGame-beginner': props.level == 'expert' ? 'img-memoryGame-expert' : ''}>
                {props.arrayHide.map((item, index) =>{
                    return <img onClick={(event)=> {
                        card1 = event;
                        card2 = event;
                        if(toggle){
                            number2 = props.random[index];
                            setToggle(!toggle);
                            if(number1 === (number2+props.num) || number1 === (number2-props.num)){
                                console.log(card2);
                                card2.currentTarget.src = props.arrayShow[index].oneCard;
                                setCount(count + 1);
                                setArrayWin(arrayWin => [...arrayWin, state])
                            } else{
                                card2.target.src = props.arrayShow[index].oneCard
                                setTimeout(()=>{
                                    card2.target.src = `/memory/Hidden_card.png`;
                                    card2.type = '';
                                    image1.src = `/memory/Hidden_card.png`;
                                },700);
                                setCount(count - 1);
                            }
                        } else{
                            card1.currentTarget.src = props.arrayShow[index].oneCard;
                            setImage1(card1.currentTarget);
                            setNumber1(props.random[index])
                            let str = props.arrayShow[index].nameOfState.match(/\d+/g);
                            let str1 = parseInt(str[0])
                            if(props.level == 'beginner' && str1 > 6){
                                props.arrayShow[index].nameOfState = props.arrayShow[index].nameOfState.replace(str[0],str1-6)
                                setState(props.arrayShow[index]);
                            } else if(props.level == 'intermediate' && str1 > 10){
                                props.arrayShow[index].nameOfState = props.arrayShow[index].nameOfState.replace(str[0],str1-10)
                                setState(props.arrayShow[index]);
                            } else if(props.level == 'expert' && str1 > 15){
                                props.arrayShow[index].nameOfState = props.arrayShow[index].nameOfState.replace(str[0],str1-15)
                                setState(props.arrayShow[index]);
                            } else {
                                setState(props.arrayShow[index]);
                            }
                            setToggle(!toggle);
                            setCount(count + 1);
                        }
                    }} src={item} key={index}></img>
                })}
            </div>
        </div>
    );
}

export default MemoryGamecards;