import React,{useState} from "react";



export default function UiParent04(){
    
    const [open,setOpen] = useState(false)
    return(
        <>
            
            <div>
                <UiChild04 onToggle = {()=>setOpen(true)}/>
                {open && (
                    <div>
                        <h2>모달창 입니다</h2>
                        <button onClick={()=>setOpen(false)}>닫기</button>
                    </div>
                )}
            </div>
        </>
    )
}

function UiChild04(props){
    return(
        <>
            <button onClick={props.onToggle}>모달 열기</button>
        </>
    )
}

