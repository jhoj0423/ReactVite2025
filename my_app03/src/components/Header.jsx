import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../components/Header.css'
export default function Header(){
    return(
        <header>
            <div className="L_content"><h2>🛍Redux 쇼핑몰</h2></div>
            <ul className="R_content">
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/CartPage'}><li>Cart</li></Link>
                <li>로그인</li>
            </ul>
        </header>
    )
}