import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setList } from "../store02/productSlice";

export default function ProductData(){
    const [data,setData] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        
        const load =async()=>{
            try{
                const res = await axios.get(' https://dummyjson.com/products')
                setData(res.data)
                
                dispatch(setList(res.data.products))
                
            }catch(err){
                console.log('에러 메시지',err)
            }finally{
                console.log('요청 완료')
            }
        }
        load()
    },[])
}