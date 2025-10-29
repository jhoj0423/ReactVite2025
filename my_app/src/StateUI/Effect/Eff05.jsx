import React,{useState,useEffect} from "react";

export default function Effect05(){
    const [sec,setSec] = useState(0) 
    
    useEffect(()=>{
        const times = setInterval(()=>{
            setSec(sec+1)
        },1000)
        return () => clearInterval(times)//
    })
    return(
        <>
            <p>⌚ {sec}:초 경과</p>
        </>
    )   
}

