import React,{useState} from "react";

export default function Exstate10(){
    const [count,SetCount] = useState(0)
    const minus =()=>{
        
        /* if(count===0){
            alert('최솟값 입니다')
        }else{
            SetCount(count-1)
        } */
        let min = count===0?alert('최솟값 입니다'):SetCount(count-1)
        min
        
    }
    const plus =()=>{
        
        /* if(count>=10){
            alert('최댓값 입니다')
        }else{
            SetCount(count+1)
        } */
       let max = count===10?alert('최댓값 입니다'):SetCount(count+1)
       max
    }
    return(
        <>
            <button onClick={minus}>-</button>
            <span style={{border:'1px solid #333',fontSize:'20px',padding:'10px',backgroundColor:'yellowgreen',borderRadius:'5px'}}>{count}</span>
            <button onClick={plus}>+</button>
        </>
    )
}