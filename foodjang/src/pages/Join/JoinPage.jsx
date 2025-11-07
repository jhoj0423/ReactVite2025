import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { FoodAuth } from "../../common/LoginForm/FoodAuth";
import "../Join/JoinPage.css"
import FoodPostcode from "./PostCode";

export default function FoodJoin(){
    const {setUser,user} = useContext(FoodAuth)
    const [JoinID,setJoinID] = useState('')
    const [JoinPw,setJoinPw] = useState('')
    const [JoinPwChk,setJoinPwChk] = useState('')
    const [idchk,setIdchk] = useState('')

    const JoinUser=()=>{
        if(user.find((user)=>user.userId===JoinID)){
            return alert('이미 존재 하는 아이디 입니다')
        }else if(JoinPw !== JoinPwChk){
            return alert('비밀 번호를 다시 한번 확인해 주세요')
        }else if(JoinID.trim() === ''){
            return alert('공백은 아이디로 입력할 수 없습니다')
        }else if(JoinPw.trim() !== '' && JoinPwChk.trim() !== ''){
            let userCopy = [...user]
            userCopy.push({id:user.length+1,userId:JoinID,pass:JoinPw})
            setUser(userCopy)
            return alert('회원가입이 완료 되었습니다')
            
        }
        
    }
    const Chking=()=>{
        console.log(user)
        if(user.find((user)=>user.userId===JoinID)){
            setIdchk(true)
        }else if(user.find((user)=>user.userId!==JoinID)){
            setIdchk(false)
        }else{
            setIdchk('')
        }
    }
    return(
        <>
            <div id="joinWrap">
                        <h1>회원 가입</h1>
                        <p>회원가입하시면 다양한 혜택을 누릴실 수 있습니다.</p>
                        <div className="title">
                            <h2>회원정보 입력</h2>
                            <p>*필수 입력사항 입니다.</p>
                        </div>
                        <form>
                            <ul className="joinForm">
                                <li>
                                    <input type="text" name="userID" id="userID" placeholder="아이디*" onChange={(e)=>{setJoinID(e.target.value);setIdchk('')}} value={JoinID}/> 
                                    <button type="button" onClick={Chking}>중복확인</button>
                                    {idchk===true ? <span style={{color:'red'}}>이미 존재 하는 아이디 입니다.</span>:idchk===false?<span style={{color:'green'}}>사용가는한 아이디 입니다</span>:''}
                                </li>
                                <li>
                                    <input type="password" name="userPW" id="userPW" placeholder="비밀번호*" onChange={(e)=>setJoinPw(e.target.value)} value={JoinPw}/> 
                                </li>
                                <li>
                                    <input type="password" name="userPwRe" id="userPwRe" placeholder='비밀번호 확인*' onChange={(e)=>setJoinPwChk(e.target.value)} value={JoinPwChk}/>
                                    {JoinPw !== JoinPwChk? <span style={{color:'red',right:'50px'}}>비밀 번호를 다시 확인해주세요</span>:''} 
                                </li>
                                <li>
                                    <input type="text" name="userName" id="userName" placeholder='이름'/> 
                                </li>
                                <li>
                                    <input type="email" name="userEmail" id="userEmail" placeholder='이메일'/> 
                                </li>
                                <li>
                                    <input type="tel" name="userPhone" id="userPhone" placeholder='전화번호'/> 
                                </li>
                                <li>
                                    <label>주소</label>{/* 이부분에 postcode 들어갈꺼 */}
                                    <FoodPostcode />
                                </li>
                                
                                
                            </ul>
                            <button type="submit" id="joinbtn" onClick={JoinUser}>회원가입</button>
                        </form>
                    </div>
        </>
    )
}