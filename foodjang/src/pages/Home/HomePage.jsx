import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Home/HomePage.css"

export default function HomePage({data}){
    const [Move,setMove] = useState(0)

    const BackBtn=()=>{
        
        Move<0?setMove(Move+450):setMove(0)
        
    }
    const NextBtn=()=>{
        if(Move > -1350){
            setMove(Move-450)
        }
        
    }

    return(
        <>
            <div className="sectionHome">
                <div className="homeMain">
                    <img src="https://cdn.pixabay.com/photo/2015/12/21/04/12/restaurant-1102039_1280.jpg" alt="" />
                </div>
                <div className="firstContent">
                    <h2>이달의 상품!</h2>
                    <div className="slideContent" style={{marginLeft:`${Move}px`}}>
                        {data.slice(5,11).map((item)=>(
                            <div key={item.id}>
                                <span><img src={item.image} alt={`${item.id}번째 음식`} /></span>
                                <h3>{item.name}</h3>
                                <p>평점 : {item.rating}</p>
                            </div>
                        ))} 
                    </div>
                    <button type="button" onClick={BackBtn} className="backBtn">⇦</button>
                    <button type="button" onClick={NextBtn} className="nextBtn">⇨</button>
                </div>
            </div>
        </>
    )
}