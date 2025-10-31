import React,{useState,useEffect} from "react";

import ExJ06List from "./ProductList";
import "../Exj06/ProductApp.css"

export default function ExJ06App(){
    const [date,setDate] = useState([])
    const [errMsg,setErrMsg] = useState('')

    useEffect(()=>{
        console.log('데이터 요청 시작')
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>{
            if(!res.ok){throw new Error(`HTTPS error! status ${res.status}`)}
            return res.json()
        })
        .then((data)=>{
            console.log('받아온 데이터',data)
            //const dateslice = data.map((p)=>({id:p.id,name:p.title,price:1000*p.id,img:`https://picsum.photos/150/120?random=${p.id}`}))
            setDate(data)
        })
        .catch(()=>{
            setErrMsg(err.message)
        })
        .finally(()=>{
            console.log('데이터 요청 완료')
        })
    },[])

    return(
        <>
            <div>
                <h2>상품 목록</h2>
                
                <ExJ06List date={date}/>
                
            </div>
        </>
    )
}