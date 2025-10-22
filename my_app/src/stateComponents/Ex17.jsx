import React,{useState} from "react";

export default function Exstate17(){
    const [fontDegien,SetFontDegien]=useState({fontSize: 10,color:'black'})
    const changeText =()=>{
        SetFontDegien({fontSize:fontDegien.fontSize+10 ,color:'red'})
        console.log(fontDegien.color)
    }
    return(
        <>
            <h2 style={{fontSize:fontDegien.fontSize+'px',color:fontDegien.color}}>변화하는 글자!</h2>
            <button onClick={changeText}>변화</button>
        </>
    )
}