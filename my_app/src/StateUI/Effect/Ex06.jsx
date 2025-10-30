import React,{useState,useEffect} from "react";
import ChildEx06 from "../Effect/ChildEx06"

export default function Ex06(){
    const [Toggle,setToggle] = useState(false)
    const ToggleHandeler =()=>{
        setToggle(!Toggle)
    }
    return(
        <>
            <div>
                <h1>Lifecycle Demo</h1>
                <button type="button" onClick={ToggleHandeler}>{!Toggle?'컴포넌트 보기':'컴포넌트 숨기기'}</button>
                {Toggle && <ChildEx06 Toggle={Toggle}/>}
                <p>F12를 눌러 콘솔을 확인하세요!</p>
                <p>컴포넌트의 마운트/언마운트 메시지가 출력됩니다.</p>
            </div>
        </>
    )
}
