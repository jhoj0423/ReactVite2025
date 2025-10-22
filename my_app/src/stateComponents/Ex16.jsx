import React,{useState} from "react";

export default function Exstate16(){
    const [user,setUser] = useState({name:"철수",age:25})
    const changeAge =()=>{
        setUser({name:"철수",age:user.age+1})
        console.log(user)
    }
    return(
        <>
            <h2>{user.name}-{user.age}</h2>
            <button onClick={changeAge}>나이 +1</button>
        </>
    )
}