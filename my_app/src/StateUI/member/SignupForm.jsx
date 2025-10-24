import React,{useState} from "react"

export default function SignupForm(props){
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')

    /* 회원가입 할대 함수 */
    const signup =()=>{
        /* 예외 처리 */
        if(!name || !password){
            return alert("입력해주세요")
        }
        props.onSuccess(name)
    }
    return(
        <>
            <div className="signupBox">
                <input type="text" placeholder="이름"  value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={signup}>회원가입</button>
            </div>
        </>
    )
}