import React from 'react';

function QuizResult(props) {
    return (
        <div className='div-quiz-result'>
        <h1>Voici les reponses corrects</h1>
            {props.data.map((item, index) => {
                return(
                    <div>
                      <div>
                         <p>{index+1} - </p>
                         <img src={`/data/${item.id}.svg`}></img>
                         <p>capital of {item.nom} is </p>
                         <p> : {item.capitale}</p>
                      </div>
                         <hr />
                    </div>
                )
            })}
        </div>
    );
}

export default QuizResult;