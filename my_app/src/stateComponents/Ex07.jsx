import React,{useState} from "react";

export default function Exstate07(){
    const [colors,SetColors] = useState('red')
    const plus =()=>{
        SetColors(colors==='red'?'green':colors==='green'?'blue':'red')
    }
    return(
        

        <>
            <div style={{
                width:'200px',
                height:'200px',
                borderRadius:'10px',
                backgroundColor:colors
            }}></div>
            <button onClick={plus}>다음 색상</button>
        </>
    )
}