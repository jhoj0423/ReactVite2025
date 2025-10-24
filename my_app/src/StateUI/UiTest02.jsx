import React,{useState} from "react";


export default function LoginView(){
    /* 현재 로그아웃 상태 */
    const [isLogin,setIsLogin] = useState(false)
    return(
        <>
            <div className="Login">
                {isLogin ? <h1>WELCOME BACK!!</h1> : <h1>Please Login</h1>}
                <button onClick={()=>setIsLogin(!isLogin)}>{isLogin ? '로그아웃' : '로그인'}</button>
                {/* set~~(!~~) => ~~의 값의 부정해서 */} 
            </div>
        </>
    )
}

