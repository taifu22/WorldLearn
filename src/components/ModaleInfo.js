import React, {useState} from 'react';

function ModaleInfo(props) {
  
    let [arrayPays, setArrayPays] = useState([]);
    //let languages;
    //let arrayBorders = [];
    //let objectPays;

    // if(props.dataPays){
    //   props.dataAll.map(item => {
    //     item.borders.map(item1=>{
    //       props.dataAll.map(item2=>{
    //         if (item1 == item2.cca3 && !arrayBorders.includes(item2.name.common)) {
    //           arrayBorders.push(item2.name.common)
    //         }
    //       })
    //       objectPays = {
    //         "name": item.name.common,
    //         "nameId": item.cca3,
    //         "borders": arrayBorders,
    //         "urbanArea": item.area,
    //         "capital": item.capital[0],
    //         "languages": languages,
    //         "region": item.region,
    //         "subregion": item.subregion
    //     }
    //       languages = Object.values(item.languages).map((item2,index) => {
    //         return item2+", "
    //       })
    //     })
    //     arrayBorders = [];
    //     console.log(JSON.stringify(objectPays)); 
    //   })
    // }

    return (
        <div className={props.toggle ? "modal-worldmap" : "modal-overlay"}>
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header"> 
                <div>
                  <h2>{props.title}</h2>
                  <img className='flag-modal' src={`/data/${props.id}.svg`} alt={props.id}></img>
                </div> 
                  <button 
                    type="button"
                    className="modal-close-button"
                    onClick={() => {props.hide()}}
                  >
                  <span>&times;</span>  
                  </button> 
                </div> 
                <div className="modal-body">
                    <img className='img-map' src={`/countries-map/${props.id}.png`} alt={props.id}></img>
                    <div className='body-country-info'>
                      <p><span>Basic information</span></p>
                      <p><span>Official Name : </span>{props.dataPays.name.official}</p>
                      <p><span>Region : </span>{props.dataPays.region}</p>
                      <p><span>SubRegion : </span>{props.dataPays.subregion}</p>
                      <p><span>Urban Area : </span>{props.dataPays.area} km²</p>
                      <p><span>capital : </span>{props.dataPays.capital[0]}</p>
                      <p><span>Languages : </span>{Object.values(props.dataPays.languages).map((item,index) => {
                        return item+", "
                      })}</p>
                      <p><span>Borders : </span>{props.dataPays.borders.map(item => {
                        props.dataAll.map(item1 => {
                            if (item == item1.cca3 && !arrayPays.includes(item1.name.common)) {
                              setArrayPays(array => ([...array, item1.name.common]));
                            }
                          })
                        })}
                        {arrayPays.length ? arrayPays.map(item2 => item2+", ") : 'island with border with the sea'}</p>
                    </div>
                </div>
              </div>
            </div>
          </div> 
    );
}

export default ModaleInfo;