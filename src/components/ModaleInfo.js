import React from 'react';

function ModaleInfo(props) {
  console.log(props.show);
    return (
        <div className={props.show ? "modal-overlay" : "modal-overlay1"}>
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <h4>{props.title}</h4>
                  <button 
                    type="button"
                    className="modal-close-button"
                    onClick={props.hide}
                  >
                  <span>&times;</span> 
                  </button>
                </div>
                <div className="modal-body">
                    <p>{props.id}</p>
                      {Object.values(props.languages).map((item,index) => {
                        return <p key={index}>{item}</p>
                      })}
                    <img className='flag-modal' src={`/data/${props.id}.svg`} alt={props.id}></img>
                </div>
              </div>
            </div>
          </div>
    );
}

export default ModaleInfo;