import React,{useState} from "react";

export default function Exstate13(){
    const [Text,SetText] = useState('')
    
    const output =(e)=>{
        SetText(e.target.value)
    }
    const reset =()=>{
        SetText('')
    }
    return(
        <>
            <input type="text" onChange={output} value={Text}/>
            <button onClick={reset}>초기화</button>
            <p>{Text}</p>
        </>
    )
}