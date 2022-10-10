import React, { useState } from 'react';
import DropDown from './DropDown';

function Lightbox(props) {

    const [dataImage, setDataImage] = useState(props.datas[0].image);
    const [data, setData] = useState(props.datas[0].data)
    const [title, setTitle] = useState(props.datas[0].title)
    const [indexImage, setindexImage] = useState(0)

    function nextImage() {
        if (indexImage === props.datas.length -1) {
            setindexImage(0);
            setDataImage(props.datas[0].image);
            setData(props.datas[0].data)
            setTitle(props.datas[0].title)
        } else {
            setDataImage(props.datas[indexImage+1].image);
            setData(props.datas[indexImage+1].data)
            setTitle(props.datas[indexImage+1].title)
            setindexImage(indexImage+1);
        } 
    }
    function previousImage() {
        if (indexImage === 0) {
            setDataImage(props.datas[props.datas.length -1].image);
            setData(props.datas[props.datas.length -1].data)
            setTitle(props.datas[props.datas.length -1].title)
            setindexImage(props.datas.length -1);
        } else {
            setDataImage(props.datas[indexImage-1].image);
            setData(props.datas[indexImage-1].data)
            setTitle(props.datas[indexImage-1].title)
            setindexImage(indexImage-1);
        }
    }

    return (
        <div className='div-lightbox'>
            <i onClick={previousImage} className="icon fa fa-solid fa-angle-left"></i> 
            {<div className='continents'>
                <img className={props.toggle ? 'image-lightbox-none' : 'image-lightbox'} src={dataImage}></img>
                <div className={props.toggle ? 'dropdown-margin' : 'dropdown-margin-notoggle'}><DropDown title={title} pays={data} func={props.func}/></div>
            </div>}
            <i onClick={nextImage} className ="icon icon2 fa fa-solid fa-angle-right"></i>
        </div>
    );
}

export default Lightbox;