import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecipDetail({Menu}){
    const {id} = useParams()
    
    const food = Menu.find((Menu)=>Menu.id===Number(id))

    console.log(id)
    console.log(food)

    return(
        <>
            {food !== null && food !==undefined ?
                (<div className="MenuInfo">
                    <h2>{id}번 메뉴 레시피 상세</h2>
                    <h4>{food.name}</h4>
                    <span><img src={food.image} alt={`${id}번째 음식 이미지`} style={{width:'300px',height:'200px'}}/></span>
                    <p>요리 유형 : {food.cuisine}</p>
                    <p>난이도 : {food.difficulty}</p>
                    <p>서빙 수 : {food.servings}</p>
                    <p>칼로리 : {food.caloriesPerServing}</p>
                    <p>평점 : {food.rating}</p>
                    <strong>조리방법</strong>
                    <ul>
                        {food.instructions.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    
                </div>) : null
            }
            <Link to='/'><button type="button">이전 페이지로</button></Link>
        </>
    )
}