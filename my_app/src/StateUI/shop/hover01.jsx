import React,{useState} from "react";

export default function Hover01(){
    //isHoverde =false 은 hover 안된 상태
    const[isHoverde,setIsHovered] = useState(false)
    return(
        <>
            <div
                onMouseEnter={()=>setIsHovered(true)}
                onMouseLeave={()=>setIsHovered(false)}
                style={{backgroundColor:isHoverde?"yellowgreen":'#ccc',
                    padding:'20px', cursor:'pointer'
                }}
            >
                호버하면 색이 변합니다.
            </div>
        </>
    )
}