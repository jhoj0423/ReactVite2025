import React,{useState} from "react";

export default function Exstate14(){
    const now = new Date().toLocaleTimeString()
    const [time,SetTime] = useState(now)
    
    const renewal =()=>{
        
        SetTime([now])
        console.log(time)
        
    }
    return(
        <>
            <h2>{time}</h2>
            <button onClick={renewal}>갱신</button>
        </>
    )
}