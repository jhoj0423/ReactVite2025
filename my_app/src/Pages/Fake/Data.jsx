import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//커스텀 훅 => 훅을 제조해서 만든 훅 useProduct()
//커스텀 푹 안에 useState,useEffect, fetch()만으로 구성된 함수
export default function userProduct(){
    const [data,setData] = useState([])
    const [errMsg,setErrMsg] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
            fetch(`https://fakestoreapi.com/products`)
            .then((res)=>{
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`)
                    //throw new Error('djd',res.status); => 인수가 2개
                }
                return res.json()
            })
            .then((data)=>{
                //배열 또는 객체 {} 는 문자열로 바꾸어출력하려고 한다.
                //.tostring() 자바스크립트가 가지고 있는 메서드 객체이다 
                //Array나 Object의 기본 tostring()은 
                //=>[object object] 형태로 호출한다.
                setData(data)
                console.log('제이슨으로 받아온 데이터',data)
                console.log(data)
            })
            .catch(()=>{
                setErrMsg(err.message)
            })
            .finally(()=>{
                console.log("요청완료")
                setLoading(false)
            })
    },[])
    
    console.log(data)
    // JSON 에서 받아온 data 상태변수를 return을 이용하여 반환하여 준다
    return data;
}