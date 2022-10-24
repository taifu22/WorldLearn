import React, { memo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import useModal from '../personalHooks/useModal';
import FlagComponent from "./FlagComponent";
import ModaleInfo from "./ModaleInfo";

const WorldMap = () => {

  const {isShowing: isInfoShowed, toggle: toggleInfo} = useModal();
  const [dataPays, setDataPays] = useState();
  const [dataPaysinfo, setDataPaysInfo] = useState();
  const [dataPaysinfo1, setDataPaysInfo1] = useState(); 
  const [namePays, setnamePays] = useState();
  const [flagPays, setFlagPays] = useState();
  const [clientXState, setclientXState] = useState();
  const [clientYState, setclientYState] = useState();
  const [togglePageWorldMap, setTogglePageWorldMap] = useState(false)
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  function handleClick(data) {
    toggleInfo()
    setDataPays(data)
    setTogglePageWorldMap(!togglePageWorldMap);
    dataPaysinfo.find(item => {
      if (item.cca3 === data.id) {
        setDataPaysInfo1(item)
      }
    })
    console.log(data);
  }

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  useEffect(() => {
    fetch('./countries.json', {
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
  
  return (
    <div data-tip="" className="world-map">
    {flagPays && namePays ? <FlagComponent name={namePays} image={flagPays} clientX={clientXState} clientY={clientYState}/> : ''}
      <ComposableMap>
        <ZoomableGroup 
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography="/features.json" >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => {
                    setclientXState(event.pageX);
                    setclientYState(event.pageY);
                    setnamePays(geo.properties.name);
                    setFlagPays(`/data/${geo.id}.svg`);
                  }}
                  onMouseLeave={() => {
                    setnamePays('');
                    setFlagPays('');
                  }}
                  onClick={() => handleClick(geo)}
                  outline='none'
                  fill={geo.properties.color ? geo.properties.color : 'red'}
                  stroke="#FFF"
                  strokeWidth={0.5}
                  style={{
                    default: {
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      //outline: "none"
                    },
                    pressed: {
                      //fill: "#E42",
                      outline: "none",
                      borderColor: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className="controls">
        <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
      <button className="button-link"><Link style={{color:'white' , textDecoration:'none'}} to={"/"}>Retour à l'accueil</Link></button>
      {isInfoShowed && dataPays && dataPaysinfo && dataPaysinfo1 && 
        <ModaleInfo toggle={togglePageWorldMap} dataAll={dataPaysinfo} dataPays={dataPaysinfo1} id={dataPays.id} title={dataPays.properties.name} languages={dataPaysinfo1.languages} hide={() =>{toggleInfo(); setTogglePageWorldMap(!togglePageWorldMap)}} show={isInfoShowed}/>}
    </div>
  );
};

export default memo(WorldMap);