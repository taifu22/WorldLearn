import React from 'react';

function FlagComponent(props) {
    return (
        <div className='div-flag-component' style={{position:'absolute', top:props.clientY-100+'px', left:props.clientX-100+'px'}}>
            <div className='div-flag-container'>
                <p>{props.name}</p>
                <img src={props.image}></img>
            </div>
            <i className="fas fa-solid fa-caret-down"></i>
        </div>
    );
}

export default FlagComponent;