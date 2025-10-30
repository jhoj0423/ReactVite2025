import React,{useState,useEffect} from "react";

export default function Ex11(){
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)
    const nameChange =(e)=>{
        setName(e.target.value)
    }
    const ageChange =(e)=>{
        setAge(e.target.value)
    }
    useEffect(()=>{
        if(name.trim() !==''){
            console.log('이름이 변경 되었습니다')
        }else{}
    },[name])
    useEffect(()=>{
        if(age !=='' && age>0){
            console.log('나이가 변경되었습니다')
        }else{}
    },[age])



    return(
        <>
            <h1>이름과 나이</h1>
            <span>이름 : </span>
            <input type="text" placeholder="이름을 입력해주세요" value={name} onChange={nameChange}/>
            <span>나이 : </span>
            <input type="number" placeholder="나이를 입력해주세요" value={age} onChange={ageChange}/>
        </>
    )
}