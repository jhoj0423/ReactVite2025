import React,{useState} from "react";

export default function Exstate09(){
    const [count,SetCount] = useState(0)
    const [numbers,SetNumbers] = useState('')
    const num =()=>{
        SetCount(count+1)

        if(count%2===0){
            SetNumbers('짝수입니다')
        }else{
            SetNumbers('홀수입니다')
        }
    }
    
    return(
        <>
            <h2>{count}</h2>
            <button onClick={num}>+</button>
            <p>{numbers}</p>
        </>
    )
}