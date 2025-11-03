import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

export default function ProdApp(){
    const prodItem =[
        {id:1,name:'아구몬',level:20},
        {id:2,name:'그레이몬',level:47},
        {id:3,name:'메탈그레이몬',level:75},
    ]

    return(
        <>
            <div>
                <h2>목록</h2>
                <ul>
                    {prodItem.map((item)=>(
                        <li key={item.id}>
                            {/* Link to = {`/detail/${item.id}`}부분 중 ${item.id}=>useprams()받아올때 파라미터 값 */}
                            <Link to={`/detail/${item.id}`}>
                                <span>{item.name}=Level:{item.level}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}