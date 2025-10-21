import React,{useState} from "react"

export default  function Alert(type,msg){
    
    const colorChange = type === 'error'?'red':type === 'success'?'green':'blue'
    
    return(
        /* 타입에 따른 색이 변경되도록 하는 함수를 작성 */
        <>
            <div >
                <button style={{backgroundColor:colorChange,
                width:'100px',
                height:'100px',
                borderRadius:'10px',
                color:'#fff'
                }}
                >{msg}</button>
            </div>
        </>
    )
}

