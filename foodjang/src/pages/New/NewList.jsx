import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../New/NewList.css"

export default function NewList({data}){
    return(
        <>
            <div className="sectionNew">
                <ul>
                    {data.slice(25,30).map((item)=>(
                        <li key={item.id}>
                            <span><img src={item.image} alt={`${item.id}번째 제품 이미지`} /></span>
                            <h4>{item.name}</h4>
                            <div className="NewInfo">
                                <h2>{item.name}</h2>
                                <p>만드는 방법 : {item.difficulty}</p>
                                <p>음식 종류 : {item.cuisine}</p>
                                <p>칼로리 : {item.caloriesPerServing}cal</p>
                                <strong>조리 방법</strong>
                                <ol>
                                    {item.instructions.map((cook,index)=>(
                                        <li key={index}>{cook}</li>
                                    ))}
                                </ol>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}