import { useContext } from "react";
import { useState } from "react";
import { LoginForm } from "../AuthContext";

export default function LoginPage(){
    const {loginId,login} = useContext(LoginForm)
    const [user,setUser] = useState('')
    const [userPass,setUserPass] = useState('')
    const [loginTab,setLoginTab] = useState(false)

    const idoutput =(e)=>{
        setUser(e.target.value)
    }
    const passoutput =(e)=>{
        setUserPass(e.target.value)
    }
    return(
        <>
            <p>홈로그인</p>
            {!loginTab?
                <div>
                    <p>로그인이 필요합니다</p>
                    <button type="button" onClick={()=>setLoginTab(true)}>로그인 하러 가기</button>
                </div>
            :
                <div>
                    <h2>로그인</h2>
                    <input type="text" placeholder="아이디를 입력해주세요" onChange={idoutput} value={user}/>
                    <input type="text" placeholder="비밀번호를 입력해주세요" onChange={passoutput} value={userPass}/>
                    <button type="button" onClick={()=>login({userId:user,userPass:userPass})}>로그인</button>
                </div>
            }
        </>
    )
}