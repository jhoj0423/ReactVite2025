import React,{useState,useEffect} from "react";

export default function Ex07(){
    const today = new Date()
    const todayHour = today.getHours()
    const todayHours = todayHour<10?`0${todayHour}`:todayHour
    const todayMin = today.getMinutes()
    const todayMinutes = todayMin<10?`0${todayMin}`:todayMin
    const todaysec = today.getSeconds()
    const todayseconds = todaysec<10?`0${todaysec}`:todaysec
    const [timer,setTimer]=useState('')

    //const twotime =(num) =>(num<10?`0${num}`:num)
    //const hour = twotime(today.getHours)
    //const Minutes = twotime(today.getMinutes)
    //const Seconds = twotime(today.getSeconds)


    useEffect(()=>{
        const times = setInterval(()=>{
            setTimer(`${todayHours}:${todayMinutes}:${todayseconds}`)
        },1000)

        return ()=>clearInterval(times)
    },)
    return(
        <>
            <h1>DIGIDAL CLOCK</h1>
            <p style={{fontSize:'80px',color:'black',fontWeight:'bold',margin:'10px'}}>
                {timer}
            </p>
            {/* 지금 지역의 날짜를 영문법으로 출력 */}
            <p>{today.toLocaleDateString()}</p>
        </>
    )
}