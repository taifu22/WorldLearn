import React, {useState} from 'react';

function MemoryGamecards(props) {

    const [image1, setImage1] = useState();
    const [toggle, setToggle] = useState(false);
    const [number1, setNumber1] = useState();
    let number2;
    let count = 0
    let card2;
    let card1;

    //

    return (
        <div className='container-memorygamecard'>
            <h1>Level : {props.level}</h1>
            <div className={props.level == 'intermediate' ? 'img-memoryGame-intermediate' : props.level == 'beginner' ? 'img-memoryGame-beginner': props.level == 'expert' ? 'img-memoryGame-expert' : ''}>
                {props.arrayHide.map((item, index) =>{
                    return <img onClick={(event)=> {
                        card1 = event;
                        card2 = event;
                        console.log(event)
                        if(toggle){
                            console.log(props.level)
                            number2 = props.random[index];
                            setToggle(!toggle);
                            if(number1 === (number2+props.num) || number1 === (number2-props.num)){
                                card2.currentTarget.src = props.arrayShow[index]
                            } else{
                                card2.target.src = props.arrayShow[index]
                                setTimeout(()=>{
                                    card2.target.src = `/memoryGame/Hidden_card.png`;
                                    card2.type = '';
                                    image1.src = `/memoryGame/Hidden_card.png`;
                                },1000);
                            }
                        } else{
                            console.log(toggle);
                            card1.currentTarget.src = props.arrayShow[index];
                            setImage1(card1.currentTarget);
                            setNumber1(props.random[index])
                            setToggle(!toggle);
                        }
                    }} src={item}></img>
                })}
            </div>
        </div>
    );
}

export default MemoryGamecards;