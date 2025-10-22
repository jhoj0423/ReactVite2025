import React,{useState} from "react";

export default function Exstate18(){
    const [number,setNumber] = useState(0)
    const numPlus =()=>{
        
        setNumber(number+1)
    }
    return(
        <>
            <Child18 numPlus={numPlus} setNumber={setNumber} number={number}/>
            
        </>
    )
}

function Child18(props){
    
    
    return(
        <>
            <p>값 : {props.number}</p>
            <button onClick={props.numPlus} >+1</button>
        </>
    )
}