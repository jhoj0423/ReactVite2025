import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipData(){
    const [Menu,setMenu] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setMenu(data.recipes)
            console.log(data.recipes,'요청 데이터')
        })
        .catch(()=>{})
        .finally(()=>{})
    },[])
    
    return Menu
}