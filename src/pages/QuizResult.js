import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';

function QuizResult(props) {
    useEffect(() => {
        if (props.data.length > 10) {
            props.data.pop();
        } else if (props.data.length > 15) {
            props.data.pop();
        } else if (props.data.length > 30) {
            props.data.pop();
        }
    }, []);
    
    return (
        <div className='div-quiz-result'>
        <h1>Voici les reponses corrects</h1>
            {props.data.map((item, index) => {
                return(
                    <div>
                      <div>
                         <p>{index+1} - </p>
                         <img src={`/data/${item.id}.svg`}></img>
                         {item.nom ? <><p>capital of {item.nom} is </p> <p> : {item.capitale}</p></> : <p> this is the flag of {item.namePays}</p> }
                      </div>
                         <hr />
                    </div>
                )
            })}
            <button><Link style={{color:'white' , textDecoration:'none'}} to={"/quiz"}>Retourner sur la page Quiz</Link></button>
        </div>
    );
}

export default QuizResult;