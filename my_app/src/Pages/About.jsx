import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function About(){
    return(
        <>
            <div>
                <h2>여기는 About Page</h2>
                <Link to='/' style={{color:"tomato"}}>Home 페이지로 이동</Link>
            </div>
            
        </>
    )
}