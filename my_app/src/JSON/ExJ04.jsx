import React,{useState,useEffect} from "react";

export default function ExJ04(){
    const [date,setDate] = useState([])
    const [errMsg,setErrMsg] = useState('')
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        console.log('데이터 요청 시작')
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTPS error! status: ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            setDate(data)
            console.log(data)
        })
        .catch(
            setErrMsg(err.message)
        )
        .finally(
            setLoading(false)
        )
    },[])
    
    return(
        <>
            <div>
                <h2>컴퍼넌트 분리 연습</h2>
                <UserList date={date}/>
            </div>
        </>
    )
}



function UserList(props){
    return(
        <>
            <ul>
                {props.date.map((date)=>(
                    <li key={date.id}>{date.name}</li>
                ))}
            </ul>
        </>
    )
}