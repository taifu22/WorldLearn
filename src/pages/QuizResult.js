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
                         {item.nom ? <><p className='p-none'>Capital of {item.nom} is :</p> <p style={{marginLeft:'10px'}}> {item.capitale}</p></> : <p className='p-none'> This is the flag of {item.namePays}</p> }
                         {item.nom && props.dataResponses.includes(item.capitale) ? <p style={{color:'green' , marginLeft:'50px', fontSize:'20px'}}><i className="fa fa-solid fa-check"></i></p> : item.nom ? <p style={{color:'red', marginLeft:'50px', fontSize:'20px'}}><i className="fa fa-solid fa-xmark"></i></p> : ""}
                         {item.namePays && props.dataResponses.includes(item.namePays) ? <p style={{color:'green' , marginLeft:'50px', fontSize:'20px'}}><i className="fa fa-solid fa-check"></i></p> : item.namePays ? <p style={{color:'red', marginLeft:'50px', fontSize:'20px'}}><i className="fa fa-solid fa-xmark"></i></p> : ""} 
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