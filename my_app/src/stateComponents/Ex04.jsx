import React,{useState} from "react";

export default function Exstate04(){
    const [count,SetCount] = useState(0)
    const plus = () => {
        SetCount(count+1)
    }
    return(
        <>
            <h2>👍 {count}</h2>
            <button onClick={plus}>좋아요</button>
        </>
    )
}