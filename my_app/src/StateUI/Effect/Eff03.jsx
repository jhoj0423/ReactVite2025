import React,{useState,useEffect} from "react";

export default function Effect03(){
    const[show,setShow] =useState(true)
    return(
        <>
        <div>
            <button type="button" onClick={()=>setShow(!show)}>토글</button>
            {show && <Mseeage />}
        </div>
        </>
    )   
}

function Mseeage(){
    /* useEffect 의존성 빈배열 */
    useEffect(()=>{
        console.log("메세지 컴포넌트 나타남")
        return (()=> console.log('메세지 사라짐'))
    },[])

    return <p>안녀하세요</p>
}
