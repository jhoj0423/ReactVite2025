import React,{useState} from "react";

/* react에서는 화면 상태도 데이터로 관리한다. */

export default function ModalChange(){
    /* 현제 모달 닫힘 */
    const [isOpen,setIsOpen] = useState(false)
    return(
        <>
            <div className="modal">
                <button onClick={()=>setIsOpen(true)}>모달 열기</button>
                {isOpen && <div>모달 내용</div>}
                {isOpen && <button onClick={()=>setIsOpen(false)}>닫기</button>}
            </div>
        </>
    )
}

