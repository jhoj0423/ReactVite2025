import React,{useState} from "react";

export default function Exstate15(){
    const [name,setName] = useState("홍길동")
    const [age,setAge] = useState("20")
    const changeInfo =()=>{
        setName("이순신")
        setAge("30")
    }

    return(
        <>
            <h2>{name}{age}</h2>
            <button onClick={changeInfo}>정보변경</button>
        </>
    )
}