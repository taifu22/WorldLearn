import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function MemoryResult(props) {

    const [datapaysInfo, setDataPaysInfo] = useState();
    let arrayStates = [];

    useEffect(() => {
        fetch('../countries.json', {
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

    if (datapaysInfo ) {
        console.log(props.toggle);
        datapaysInfo.map(item => {
            props.data.map(item1 => {
                if (item.name.common1 != undefined && item.name.common1 === item1.nameOfState) {
                    arrayStates.push({name: item.name.common, flag: `/memory/${props.level}/${item1.nameOfState}`})
                }
            })
        })
    }

    return (
     <div className='memory-result' style={{maxHeight:'1000px'}}>
        <h1>Voici les drapeaux que vous avez trouvé</h1>
            {arrayStates.length && arrayStates.map((item,index) => {
                return(
                <div> 
                    <div>
                        <p>{index+1} - </p>
                        <img src={item.flag}></img>
                        {<p className='p-none'> This is the flag of {item.name}</p> }
                    </div>
                    <hr />
                </div>)
            })}
            <button><Link style={{color:'white' , textDecoration:'none'}} to={"/jeux"}>Retourner sur la page Jeux</Link></button>
        </div>
    );
}

export default MemoryResult;