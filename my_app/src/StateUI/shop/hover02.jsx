import React,{useState} from "react";

export default function Hover02(){
    //isToolTip =false 은 isToolTip 안보임 상태
    const[isToolTip,setIsToolTip] = useState(false)
    return(
        <>
            <div>
                <button type="button"
                    onMouseEnter={()=>setIsToolTip(true)}
                    onMouseLeave={()=>setIsToolTip(false)}
                >마우스를 올려보새요</button>
                <div style={{display:isToolTip?'block':'none',backgroundColor:"yellowgreen"}}>도움말 메시지</div>
                {isToolTip && <div>도움말 메시지 02</div>}
            </div>  
        </>
    )
}