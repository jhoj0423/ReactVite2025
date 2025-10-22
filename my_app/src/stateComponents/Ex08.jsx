import React,{useState} from "react";

export default function Exstate08(){
    const [goodChk,SetGoodChk] = useState('👍 좋아요')
    const output =() =>{
        if(goodChk==='👍 좋아요'){
            SetGoodChk('👎 싫어요')
        }else{
            SetGoodChk('👍 좋아요')
        }
        
    }
    return(
        <>
            <h2>{goodChk}</h2>
            <button onClick={output}>변경하기</button>
        </>
    )
}