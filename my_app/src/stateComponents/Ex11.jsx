import React,{useState} from "react";

export default function Exstate11(){
    const [colors,SetColors] = useState('')
    const output = (e) =>{
        SetColors(e.target.value)
    }
    return(
        <>
            <div style={{
                background:colors,
                width:'300px',
                height:'200px'
                }}>
                <input type="text" placeholder="예: pink" onChange={output}/>
            </div>
        </>
    )
}