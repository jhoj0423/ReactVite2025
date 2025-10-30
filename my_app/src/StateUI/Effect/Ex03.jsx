import React,{useState,useEffect} from "react";

export default function Ex03(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("현재 카운트 : "+ count)
    },[count])
    return(
        <>
            <div>
                <h2>Counter with useEffect</h2>
                <button type="button" onClick={()=>setCount(count-1)}>-</button>
                <span>{count}</span>
                <button type="button" onClick={()=>setCount(count+1)}>+</button>
                <p>콘솔을 확인 해세요! 카운트가 변경될 때마다 로그가 출력됩니다.</p>
            </div>
        </>
    )
}