import React, {useState} from 'react';

function ModaleInfo(props) {
  
    const [arrayPays, setArrayPays] = useState([]);

    if (props.toggle) {
      console.log(props.toggle);
    }

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
                      <p><span>Languages : </span>{Object.values(props.languages).map((item,index) => {
                        return item+", "
                      })}</p>
                      <p><span>Borders : </span>{props.dataPays.borders.map(item => {
                        props.dataAll.map(item1 => {
                            if (item == item1.cca3 && !arrayPays.includes(item1.name.common)) {
                              setArrayPays(array => ([...array, item1.name.common]));
                            }
                          })
                        })}{arrayPays.length ? arrayPays.map(item2 => item2+", ") : 'island with border with the sea'}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
    );
}

export default ModaleInfo;