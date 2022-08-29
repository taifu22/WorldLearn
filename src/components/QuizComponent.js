import React from 'react';

function QuizComponent(props) { 

    function handleColor(e) {
        //console.log(e);
        e.target.className = 'button-yellow';
    }
    //console.log(props.cap);
    //console.log(props.flag);

    return (
        <div>
            <div className='quiz-body'>
            <p>{props.count}</p>
                <img src={props.flag}></img> 
                <p>{props.name ? props.name : ""}</p>
            </div>
            <div className='responses'>
                <div style={props.toggle ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button style={props.color && props.cap[props.random1].color == 'green' ? {backgroundColor:"green"} : {backgroundColor:""}} onClick={(e) => handleColor(e)} className={props.color ? 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random1]?.green}</button>
                    <button style={props.color && props.cap[props.random2].color == 'green' ? {backgroundColor:"green"} : {backgroundColor:""}} onClick={(e) => handleColor(e)} className={props.color ? 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random2]?.green }</button>
                </div>
                <div style={props.toggle ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button style={props.color && props.cap[props.random3].color == 'green' ? {backgroundColor:"green"} : {backgroundColor:""}} onClick={(e) => handleColor(e)} className={props.color ? 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random3]?.green}</button>
                    <button style={props.color && props.cap[props.random4].color == 'green' ? {backgroundColor:"green"} : {backgroundColor:""}} onClick={(e) => handleColor(e)} className={props.color ? 'button-bleu' : 'hover-button-responses'}>{props.cap[props.random4]?.green}</button>
                </div>
            </div>
        </div> 
    );
}

export default QuizComponent;