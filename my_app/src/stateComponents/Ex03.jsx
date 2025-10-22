import React,{useState} from "react";

export default function Exstate03(){
    const [count,SetCount] = useState(0)
    const plus = () =>{
        SetCount(count+1)
        
    }
    
    return(
        <>
            <div style={{backgroundColor:count===0?'skyblue':count===1?'tomato':'#5fa485ff',
                width:'200px',
                height:'200px',
                borderRadius:'10px',
                padding:'20px'
            }}>
                <button onClick={plus}>색변경</button>
            </div>
        </>
    )
}