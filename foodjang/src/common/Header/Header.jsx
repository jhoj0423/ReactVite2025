import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Header/Header.css"
import { useContext } from "react";
import { FoodAuth } from "../LoginForm/FoodAuth";

export default function Header(){
    const {userChk,logout} = useContext(FoodAuth)
    return(
        <>
            <div className="Header">
                <div className="headerContent">
                    <span>
                        {userChk !== null?
                            <div>
                                <button type="button" onClick={logout}>로그아웃</button>
                                <span>안녕하세요 {userChk}님!</span>
                            </div>
                            
                        :
                            <Link to='/Login'>로그인</Link>
                        }
                    </span>
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