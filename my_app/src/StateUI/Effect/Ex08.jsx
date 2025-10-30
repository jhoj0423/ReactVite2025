import React,{useState,useEffect} from "react";

export default function Ex08(){
    const [total,setTotal] = useState(0)
    const [first,setFirst] = useState(0)
    const [second,setSecond] = useState(0)
    const firstNum =(e) =>{
        setFirst(e.target.value)
    }
    const secondNum =(e) =>{
        setSecond(e.target.value)
    }
    useEffect(()=>{
        setTotal(first*second)
        console.log(`${first} X ${second} =${first*second}`)
    },[first,second])


    return(
        <>
            <div>
                <h1>곱셈 계산기</h1>
                <span>첫 번째 숫자 : </span>
                <input type="text" onChange={firstNum} value={first}/>
                <br />
                <span>두 번째 숫자 : </span>
                <input type="text" onChange={secondNum} value={second}/>
                <p>결과 :</p>
                <strong>{total}</strong>
                <p>콘솔을 열면 계산 과정도 확인할 수 있습니다.</p>
            </div>
        </>
    )
}