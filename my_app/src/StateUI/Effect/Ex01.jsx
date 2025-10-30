import React,{useState,useEffect} from "react";

export default function Ex01(){
    //모든 HOOK의 생명주기 존재
    //=> 마운드(랜더 시작) => 업데이트(setUpdate()) => 업데이트 된 내용 리랜더 되고 난 후 언마운트(삭제됨)
    //useState => 랜더, 업데이트 될때
    //useEffect => 랜더 이외의 작업, 네트워크에서 자료 가져오는 일
    //useEffect(()=>{}) => 랜더될때마다
    //useEffect(()=>{},[]) => 처음 랜더될때 1번만
    //useEffect(()=>{},[의존성배열]) => 의존성 배열이 실행될때마다

    useEffect(()=>{
        console.log("컴퍼넌트가 마운트 되었습니다!")
    },[])
    return(
        <>
            <div>
                <h2>useEffect 기본예제</h2>
                <p>F12를 눌러 콘솔을 확인해 보세요!</p>
                <p>"컴포넌트가 마운트 되었습니다!" 메시지가 출력됩니다.</p>
            </div>
        </>
    )
}