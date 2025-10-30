import React,{useState,useEffect} from "react";

export default function Ex04(){
    const [sec,setSec] = useState(0)
    useEffect(()=>{
        let times = setInterval(() => {
            setSec(sec+1)
        }, 1000);

        return ()=> clearInterval(times)
    },)
    return(
        <>
            <div>
                <h1>자동 타이머</h1>
                <p>{sec}초가 경과 했습니다.</p>
            </div>
        </>
    )
}