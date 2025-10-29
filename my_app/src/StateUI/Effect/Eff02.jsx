import React,{useState,useEffect} from "react";

export default function Effect02(){
    const [count ,setCount] = useState(0)
    //Effect의 의존성 빈배열 이용하여 한번만 실행
    //=>랜더링 될때마다
    useEffect(()=>{
        console.log("랜덤 발생")
    })
    return(
        <div>
            <p>카운트</p>
            <button type="button" onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )   
}
