import React, { useState, useEffect } from 'react';
import useModal from '../personalHooks/useModal';
import ModaleInfo from "./ModaleInfo";

function DropDown(props) {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [valueInput, setValueInput] = useState("");
    const {isShowing: isInfoShowed, toggle: toggleInfo} = useModal();
    const [dataPaysinfo, setDataPaysInfo] = useState();
    const [dataPaysinfo1, setDataPaysInfo1] = useState();

    function handleDropdown() {
        props.func(); 
        setToggleDropdown(!toggleDropdown);
    }

    function handleClick(data) { 
        toggleInfo()
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
        <div className='dropdown'>
            <div className='dropdown-header'>
                <p>{props.title}</p>
                {toggleDropdown ? <i onClick={handleDropdown} className="rotate1 fa fa-solid fa-angle-up"></i> : 
                <i onClick={handleDropdown} className="rotate2 fa fa-solid fa-angle-down"></i>}
            </div>
            {toggleDropdown && 
            <div className='dropdown-body'>
                <ul className='ul-dropdown'>
                  <input onChange={e => setValueInput(e.target.value.toLowerCase())} type={'search'} value={valueInput} placeholder={"rentrez le nom d'un pays"}></input>
                 {props.pays.map((item, index) => {
                    return (
                         valueInput && valueInput == "" ?
                        <>
                            <li onClick={() => handleClick(item)} key={'li'+index}>
                                <p key={'p'+index}>{item.name}</p>
                                <img key={'img'+index} src={`/data/${item.id}.svg`} alt={item.id}></img>
                            </li>
                            <hr key={'hr'+index}></hr> 
                        </> :
                        item.name.toLowerCase().includes(valueInput) &&
                        <>
                            <li onClick={() => handleClick(item)} key={'li'+index}>
                                <p key={'p'+index}>{item.name}</p>
                                <img key={'img'+index} src={`/data/${item.id}.svg`} alt={item.id}></img>
                            </li>
                            <hr key={'hr'+index}></hr> 
                        </>  
                    )
                 })}
                 </ul>
            </div>} 
            {isInfoShowed && <ModaleInfo dataAll={dataPaysinfo} dataPays={dataPaysinfo1} id={dataPaysinfo1.cca3} title={dataPaysinfo1.name.common} languages={dataPaysinfo1.languages} hide={toggleInfo} show={isInfoShowed}/>}
        </div> 
    );
}

export default DropDown;