import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Header/Header.css"

export default function Header(){
    return(
        <>
            <div className="Header">
                <div className="headerContent">
                    <h2 className="Logo">헤더로고</h2>
                    <ul className="HeaderMenu">
                        <li><Link to="/">홈페이지</Link></li>
                        <li><Link to="/FoodList">푸드리스트</Link></li>
                        <li><Link to="/NewList">이번달 신제품</Link></li>
                        <li><Link to="/BestList">이달의 상품</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}