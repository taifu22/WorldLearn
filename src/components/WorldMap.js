import React, { memo, useState, useEffect } from "react";
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
        <ZoomableGroup>
          <Geographies geography="/features.json">
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
                  style={{
                    default: {
                      //background: geo.properties.color ? geo.properties.color : 'red',
                    //  outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      //outline: "none"
                    },
                    pressed: {
                      //fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {isInfoShowed && dataPays && dataPaysinfo && dataPaysinfo1 && 
        <ModaleInfo toggle={togglePageWorldMap} dataAll={dataPaysinfo} dataPays={dataPaysinfo1} id={dataPays.id} title={dataPays.properties.name} languages={dataPaysinfo1.languages} hide={() =>{toggleInfo(); setTogglePageWorldMap(!togglePageWorldMap)}} show={isInfoShowed}/>}
    </div>
  );
};

export default memo(WorldMap);