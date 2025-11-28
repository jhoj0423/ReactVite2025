import cookie from 'js-cookie';
import { useState } from 'react';

export default function CookieTest(){
    // cookie를 읽어와서 cookievalue 상태변수에 저장한다.
    // cookie 에서 값을 읽어오는 명령어 cookie.get('키')

    const [cookieValue,setCookieValue] =  useState(cookie.get('userName')||'');

    //cookie 를 저장하는 함수 생성
    const cookieSave =()=>{
        //cookie의 값을 저장할때 명령어 cookie.set(key,value,{expires})
        //cookie의 값을 저장할때 명령어 cookie.set(키,값,{만료시간})
        // {expries:1} => 1일동안 유지
        // 1분동안만 userName이 유지되도록 변경
        // 쿠키가 1분 뒤에  자동삭제 되면 홍길동이 화면에서 사라지게 하려면
        //cookie.get('userName') || ''
        const oneMinute = new Date(Date.now()+1*60*1000)
        cookie.set('userName','홍길동',{expires:oneMinute,path:'/'})
        setCookieValue('홍길동')
        alert('쿠키저장됨')
    }

    //cookie 확인하는 함수 생성
    const cookieCHK =() =>{
        const value  = cookie.get('userName');
        console.log(value)
        if(value !== undefined){
            // cookie에 저장된 값이 존재한다.
            alert(`쿠키 ${value}`)
        }else{
            setCookieValue('')
            alert('쿠키가 없습니다.')            
        }
    }

    //cookie 삭제하는 함수 생성
    const cookieDel = ()=>{
        // cookie.remove('key')
        cookie.remove('userName')
        setCookieValue('')
        alert('쿠키가 삭제되었습니다')
    }
    return (
        <div>
            <h2>쿠키 예재</h2>
            <p>현재 쿠키 값 : {cookieValue}</p>
            <button type="button" style={{backgroundColor:'yellowgreen',color:'#333'}} onClick={cookieSave}>쿠키저장</button>
            <button type="button" style={{backgroundColor:'yellowgreen',color:'#333'}} onClick={cookieCHK}>쿠키확인</button>
            <button type="button" style={{backgroundColor:'yellowgreen',color:'#333'}} onClick={cookieDel}>쿠키삭제</button>
        </div>
    )
}