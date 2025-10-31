import React,{useState,useEffect} from "react";

export default function ExJ03(){
    const [date,setDate] = useState([])
    const [loading,setLoading] = useState(true)
    const [errMsg,setErrMsg] = useState(null)

    useEffect(()=>{
        //fetch.then.then.catch.finally
        console.log('데이터 요청 시작')
        fetch("https://jsonplaceholder.typicode.com/postss")
        .then((res)=>{
            // 받은 데이터가 오류가 없다 res.ok = true -> boolean 데이터 타입 (참,거짓만 있음)
            if(!res.ok){//200~299 값
                throw new Error(`HTTPS error! status : ${res.status}`)//=> status 지금 현재 오류 상태
            }
            return res.json()
        })
        .then((data)=>{
            setDate(data)
        })

        .catch((err)=>{
            console.log(`X 에러 발생:`,err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            console.log('데이터 요청 완료')
            setLoading(false)
        })
    },[])
    if(errMsg){return <p style={{color:'red'}}>데이터 요청 실패!</p>}
    return(
        <>
        </>
    )
}