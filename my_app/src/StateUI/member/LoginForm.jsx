import React,{useState} from "react"

export default function LoginForm(props){
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    const login =()=>{
        if(!name || !password){
            return alert("입력해 주세요")
        }
        props.onSuccess(name)
    }
    //로그인 화면
    return(
        <>
            <div className="loginBox">
                <input type="text" placeholder="이름"  value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={login}>로그인</button>
            </div>
        </>
    )
}