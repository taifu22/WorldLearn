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

  function handleClick(data) {
    toggleInfo()
    setDataPays(data)
    dataPaysinfo.find(item => {
      if (item.cca3 === data.id) {
        setDataPaysInfo1(item)
      }
    })
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
                  style={{
                    default: {
                      //fill: "#D6D6DA",
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
      <ModaleInfo id={dataPays.id} title={dataPays.properties.name} languages={dataPaysinfo1.languages} hide={toggleInfo} show={isInfoShowed}/>}
    </div>
  );
};

export default memo(WorldMap);