import { useState } from "react";
import { createContext } from "react";

export const LoginForm = createContext(null)

export default function AuthProvider({children}){
    //전역 변수
    const [userChk,setUserChk] = useState([{userId:'홍길동',pass:'0000'},{userId:'아구몬',pass:'1111'}])
    const [loginId,setLoginId] = useState(null)
    const [loginPass,setLoginPass] = useState(null)
    

    const login =(userID)=>{
        let chk = false
        console.log('로그인 버튼')
        console.log('userID 버튼',userID)
        
        for(let i=0;i<userChk.length;i++){
            if(userID.userId === userChk[i].userId && userID.userPass === userChk[i].pass){
                console.log('여기서 확인')
                chk = true
                setLoginId(userID.userId)
                break; 
            }
        }

        if(chk===false && userID !== undefined){
            return alert('없는 아이디 입니다')
        }

    }
    const logout=()=>{
        console.log('^^^^',loginId)
        setLoginId(null)
    }
    return(
        <LoginForm.Provider value={{loginId,login,logout}}>
            {children}
        </LoginForm.Provider>
    )
}