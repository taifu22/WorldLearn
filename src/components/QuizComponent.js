import React ,{ useState, useRef, useEffect }from 'react';

function QuizComponent(props) { 

    const button1 = useRef(null);
    const button2 = useRef(null);
    const button3 = useRef(null);
    const button4 = useRef(null);

    function handleColor(e) {
        if (button1.current.className == 'button-yellow' || button2.current.className == 'button-yellow' || button3.current.className == 'button-yellow' || button4.current.className == 'button-yellow') {
            button1.current.className = 'hover-button-responses';
            button2.current.className = 'hover-button-responses';
            button3.current.className = 'hover-button-responses';
            button4.current.className = 'hover-button-responses';
        } 
        e.target.className = 'button-yellow';
    }

    return (
        <div>
            <div className='quiz-body'>
            <p>{props.count}</p>
                <img src={props.flag}></img> 
                <p>{props.name ? props.name : ""}</p>
            </div>
            <div className='responses'>
                <div style={props.toggle ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button ref={button1} onClick={(e) => {props.func(); handleColor(e)}} style={props.colorgreen && props.cap[props.random1].color == 'green' ? {backgroundColor:"green", color:'white'} : props.colorgreen && props.cap[props.random1].color == 'red' && button1.current.className == 'button-yellow' ? {backgroundColor:"red", color:'white'} : {backgroundColor:""}} className={props.colorbleu && button1.current.className == 'button-yellow' ? button1.current.className = 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random1]?.green}</button>
                    <button ref={button2} onClick={(e) => {props.func(); handleColor(e)}} style={props.colorgreen && props.cap[props.random2].color == 'green' ? {backgroundColor:"green", color:'white'} : props.colorgreen && props.cap[props.random2].color == 'red' && button2.current.className == 'button-yellow' ? {backgroundColor:"red", color:'white'} : {backgroundColor:""}} className={props.colorbleu && button2.current.className == 'button-yellow' ? button2.current.className = 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random2]?.green }</button>
                </div>
                <div style={props.toggle ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button ref={button3} onClick={(e) => {props.func(); handleColor(e)}} style={props.colorgreen && props.cap[props.random3].color == 'green' ? {backgroundColor:"green", color:'white'} : props.colorgreen && props.cap[props.random3].color == 'red' && button3.current.className == 'button-yellow' ? {backgroundColor:"red", color:'white'} : {backgroundColor:""}} className={props.colorbleu && button3.current.className == 'button-yellow' ? button3.current.className = 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random3]?.green}</button>
                    <button ref={button4} onClick={(e) => {props.func(); handleColor(e)}} style={props.colorgreen && props.cap[props.random4].color == 'green' ? {backgroundColor:"green", color:'white'} : props.colorgreen && props.cap[props.random4].color == 'red' && button4.current.className == 'button-yellow' ? {backgroundColor:"red", color:'white'} : {backgroundColor:""}} className={props.colorbleu && button4.current.className == 'button-yellow' ? button4.current.className = 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random4]?.green}</button>
                </div>
            </div>
        </div> 
    );
}

export default QuizComponent;