import React,{useState} from "react";

export default function Exstate05(){
    const [toggle,SetToggle] = useState('none')
                            /* useState(ture) */
    const num =()=>{
        SetToggle(toggle==='none'?'inline':'none')
    }
    return(
        <>
            <button onClick={num}>이미지 토글</button>
            {/* onClick={()=>SetToggle(!toggle)} */}
            <img src="../public/vite.svg" alt="이미지" style={{display:toggle}} />
        </>
    )
}