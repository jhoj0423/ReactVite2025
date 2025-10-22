import React,{useState} from "react";

export default function Exstate01(){
    const [count,SetCount] = useState(0)
    const plus=()=>{
        SetCount(count+1)
    }
    return(
        <>
            <h2>{count%2===0?"안녕하세요":"Hello"}</h2>
            <button type="button" onClick={plus}>toggle</button>
        </>
    )
}