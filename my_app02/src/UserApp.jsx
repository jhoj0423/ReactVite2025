import { useState,useEffect } from "react";
//내가 만든 저장소 import
import { UserContext } from "./Context/UserContext";
import Header from "./Context/component/Header";

//부모 컴포넌트 , 공유하고 데이터를 상태변수로 지정
export default function UserApp(){
    //전역변수
    const [username,setUsername] = useState('')
    console.log('UserContext.Provider에 전달된 값',{username,setUsername})
    //provider로 감싸서 전역의 뎅터 값을 전달한다.
    return(
        <UserContext.Provider value={{username,setUsername}}>
            <div>
                <h2>Context API 기본예제</h2>
                <Header />
            </div>
        </UserContext.Provider>
    )
}