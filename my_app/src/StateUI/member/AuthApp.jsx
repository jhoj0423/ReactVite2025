import React,{useState} from "react";
import LoginForm from '../member/LoginForm.jsx';
import SignupForm from '../member/SignupForm.jsx';
import Message from '../member/Message.jsx';


/* 전체 로그인 회원가입 페이지 상태전환 담당  */
/* islogin,msg 상태관리 */
/* 성공시 msg바꿈 */
export default function AuthApp(){
    const [isLogin,setIsLogin]=useState(true)
    const [msg,setMsg] = useState('')
    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>로그인/회원가입🔒</h2>
                <Message msg={msg}/>
                {/* 로그인이 회원가입하고 회원가입 버튼 클릭하면 */}
                {/* 회원가입 완료! 환영합니다.{name}님 */}
                {/* 로그인이 완료되면 : '환영합니다.! {name}님 */}
                {isLogin ? <LoginForm onSuccess={(name)=> setMsg(`환영합니다! ${name}님`)}/>
                : <SignupForm onSuccess={(name)=> setMsg(`회원가입 완료 환영합니다! ${name}님`)}/>}
                
                
                <button onClick={()=>{setIsLogin(!isLogin); setMsg('');}}>{isLogin?'회원가입하기':'로그인하기'}</button>
            </div>
        </>
    )
}