import { useState } from "react";
import { FoodAuth } from "../../common/LoginForm/FoodAuth";
import { Link } from "react-router-dom";
import "../Login/LoginPage.css"
import { useContext } from "react";

export default function LoginPage(){

    const {userChk,login} = useContext(FoodAuth)

    const [myId,setMyId] = useState('')
    const [myPass,setMyPass] = useState('')

    const idInput=(e)=>{
        setMyId(e.target.value)
    }
    const passInput=(e)=>{
        setMyPass(e.target.value)
    }
    return(
        <>
            <div className="LoginContainer">
                <div className="loginBox">
                    <h2>로그인</h2>
                    <div className="login">
                        <h4>회원 로그인</h4>
                        <div className="loginInput">
                            <input type="text" placeholder="아이디" onChange={idInput} value={myId} />
                            <br/>
                            <input type="text" placeholder="비밀번호" onChange={passInput} value={myPass} />
                        </div>
                        <button type="button" onClick={()=>login({userId:myId,pass:myPass})}>로그인</button>
                        <p>아이디 저장</p>
                    </div>
                </div>
            </div>
        </>
    )
}