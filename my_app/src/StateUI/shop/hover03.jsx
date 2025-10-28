import React,{useState} from "react";

export default function Hover03(){
    //isToolTip =false 은 isToolTip 안보임 상태
    const[isOpen,setIsOpen] = useState(false)
    return(
        <>
            <div
            onMouseEnter={()=>setIsOpen(true)}
            onMouseLeave={()=>setIsOpen(false)}
            style={{position:'relative',display:'inline-block'}}
            >
                <button type="button">메뉴</button>
                <ul style={{display:isOpen?'block':'none',position:'absolute',top:'100%',left:0,border:'3px solid #333',listStyle:"none",padding:'10px',backgroundColor:"yellowgreen",margin:0}}>
                    <li>항목1</li>
                    <li>항목2</li>
                    <li>항목3</li>
                </ul>
            </div>
        </>
    )
}