import React,{useState} from "react";

export default function Exstate06(){
    const [TextSize,SetTextSize] = useState(10)
    const plus = () =>{
        SetTextSize(TextSize+10)
    }
    return(
        <>
            <h1 style={{fontSize:TextSize+'px'}}>커지는 글자!</h1>
            <button onClick={plus}>글자 커져라</button>
        </>
    )
}