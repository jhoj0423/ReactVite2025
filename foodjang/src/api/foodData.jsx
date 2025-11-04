import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Data(){
    const [date,setDate] = useState([])
    const [errMsg,setErrMsg] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data.recipes,'받아온 데이터 확인')
            setDate(data.recipes)
        })
        .catch(()=>{

        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    return date;
}