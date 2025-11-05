import { useState } from "react";
import { createContext } from "react"; // 데이터 공용 저장소 생성 라이버리

export const ThemeContext = createContext(null);

//provider컴포넌트를 전의

export default function ThemeProvider({children}){
    //전역 변수
    const [Theme,setTheme] = useState(false)

    //토글 함수(업데이트 함수)
    const toggleTheme =()=>{
        //setTheme(!Theme)
        setTheme((prev)=> !prev )// prev = > 이전의 값이라는 의미
        //아래의 함수 형식으로 이해해서 전환해준다.
        //function toggle(prev){
        // setTheme(!prev)}
    }
    //공유할 데이터는 : 값 함수 모두가능
    //내가 만든 데이터 저장소 이름.provider 의 value={{}} 값을 공유한다.
    return(
        <ThemeContext.Provider value={{Theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
