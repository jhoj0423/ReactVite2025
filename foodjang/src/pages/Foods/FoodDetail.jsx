import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Foods/FoodList.css"

export default function FoodDetail({data}){
    const {id} = useParams()
    const food = data.find((data)=>data.id===Number(id))
    return(
        <>
            <div className="Section">
                
                {food !== null && food !==undefined ?
                (<div className="MenuInfo">
                    <h2>{id}번 메뉴 레시피 상세</h2>
                    <h4>{food.name}</h4>
                    <span><img src={food.image} alt={`${id}번째 음식 이미지`} style={{width:'700px',height:'700px'}}/></span>
                    <div className="info">
                        <p>요리 유형 : {food.cuisine}</p>
                        <p>난이도 : {food.difficulty}</p>
                        <p>서빙 수 : {food.servings}</p>
                        <p>칼로리 : {food.caloriesPerServing}</p>
                        <p>평점 : {food.rating}</p>
                        <strong>조리방법</strong>
                        <ol>
                            {food.instructions.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                    
                    
                </div>) : null
            }
            </div>  
        </>
    )
}