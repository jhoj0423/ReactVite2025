import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <div>
                <h2>여기는 Home Page </h2>
                <Link to="/about" style={{color:"skyblue"}}>About 페이지로 이동</Link>
            </div>
            
        </>
    )
}