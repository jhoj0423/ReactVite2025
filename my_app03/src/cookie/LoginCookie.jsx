import '../cookie/LoginNaver.css'
import { useState } from 'react'
import cookie from 'js-cookie'

export default function LoginCookie(){
    const [userId,setUserId] = useState(cookie.get('userId') || '')
    const [userPw,setUserPw] = useState('')
    const saveId = cookie.get('userId')
    const [idChk,setIdChk] = useState(
        saveId?true:false
    )

    const idHandler =(e)=>{
        setIdChk(e.target.checked)
    }

    //로그인 버튼 클릭 핸들러
    //<form> 안에 로그인 버튼을 클릭하면 기본으로 페이지가 새로고침이된다.
    //새로고침 되면react상태가 초기화된다.
    //화면에 input값과 체크박스 상태도 모두 사라진다.
    //위에 오류를 해결하려면 반드시 e.preventDefault()
    const loginHandler =(e) =>{
        e.preventDefault(); // 폼의 기본 제출동작을 막는다.
        //1분뒤 쿠키 만료
        
        if(idChk){
            const one = new Date(Date.now()+1*60*1000);
            cookie.set('userId',userId,{expires:one,path:'/'})
            console.log('됨')
        }else{
            //아이디 저장 체크가 안되어 있음 쿠키는 삭제
            cookie.remove('userId',{path:'/'})
            console.log('안됨')
        }
        alert(`로그인 시도 ${userId}`)
            
    }

    return(
        <>
            <h2>NAVER</h2>
            <div className='loginBox'>
                <form onSubmit={loginHandler}>
                    <ul>
                        <li>
                            <input type="text" name="userID" id="userID" placeholder='아이디 또는 전화번호' onChange={(e)=>setUserId(e.target.value)} value={userId}/>
                        </li>
                        <li>
                            <input type="password" name="userPass" id="userPass" placeholder='비밀번호' onChange={(e)=>setUserPw(e.target.value)} value={userPw}/>
                        </li>
                        <li className='saveChk'>
                            <input type="checkbox" name="saveID" id="saveID" onChange={idHandler}/>
                            <label htmlFor="saveID">아이디 저장</label>
                            <span>IP보안</span>
                        </li>
                    </ul>
                    <button type="submit" className='btn'>로그인</button>
                </form>
                
            </div>
        </>
    )
}