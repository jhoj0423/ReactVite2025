import { useContext } from "react";
import { useState } from "react";
import { LoginForm } from "../AuthContext";

export default function Profile02(){
    const {loginId,logout} = useContext(LoginForm)
    if(loginId!==undefined && loginId !== null){
        return(
            <>
                <p>홈프로필</p>
                <button type="button" onClick={logout}>로그아웃</button>
                <h2>프로필 페이지</h2>
                <p>안녕하세요, {loginId} 님!</p>
                <p>오늘도 좋은 하루 되세요</p>
            </>
        )
    }   
}