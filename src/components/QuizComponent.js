import React from 'react';

function QuizComponent(props) {
    return (
        <div>
            <div className='quiz-body'>
                <img src={props.flag}></img> 
                <p>{props.name}</p>
            </div>
            <div className='responses'>
                <div style={props.toggle ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button className='hover-button'>{props.cap[props.random1]}</button>
                    <button className='hover-button'>{props.cap[props.random2]}</button>
                </div>
                <div style={props.toggle ? {display:'flex'} : {display:'none'}} className='group-responses'>
                    <button className='hover-button'>{props.cap[props.random3]}</button>
                    <button className='hover-button'>{props.cap[props.random4]}</button>
                </div>
            </div>
        </div> 
    );
}

export default QuizComponent;