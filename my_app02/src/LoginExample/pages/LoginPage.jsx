import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate} from "react-router-dom"
import { Link } from "react-router-dom"

export default function LoginPage05(){
    const [id,setId] = useState('')
    const [pw,setPw] = useState('')
    const {login} = useContext(AuthContext)
    // useNavigate 훅을 변수로 정의 해준다
    const navigate = useNavigate();

    // id = 원숭이 이면서 pw = 0000 로그인성공
    // 로그인이 성공하면 alert('로그인 성공')
    //로그인 성공시 home페이지로 이동
    //아니면 아이디 비밀버호를 확인하세요

    const myId =(e)=>{
        setId(e.target.value)
    }
    const myPw =(e)=>{
        setPw(e.target.value)
    }

    const LoginChk =()=>{
        if(id==='원숭이' && pw === '0000'){
            navigate('/Home')
            login(id)
            return alert('로그인 성공')
            
        }else{
            return alert('아이디 비밀번호를 확인하세요')
        }
    }

    return(
        <>
            <div className="loginBox">
                <h2>로그인 페이지</h2>
                <div className="inputBox">
                    <input type="text" placeholder="아이디" value={id} onChange={myId} />
                    <input type="password" placeholder="비밀번호" value={pw} onChange={myPw} />
                </div>
                <button type="button" onClick={LoginChk}>로그인</button>
            </div>
        </>
    )
}