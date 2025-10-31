import React,{useState,useEffect} from "react";

export default function ExJ05(){
    const [date,setDate] = useState([])
    const [loading,setLoading] = useState(true)
    const [errMsg,setErrMsg] = useState(null)

    useEffect(()=>{
        
            let timer = setTimeout(() => {
                console.log('데이터 요청 시작')
                fetch("https://jsonplaceholder.typicode.com/users")
                .then((res)=>{
                    if(!res.ok){
                        throw new Error(`HTTPS error! status : ${res.status}`)
                    }
                    return res.json()
                })
                .then((data)=>{
                    console.log(data)
                    setDate(data)
                })
                .catch(()=>{
                        setErrMsg(err.message)
                        console.log(`X 에러 발생 `,err)
                    }
                )
                .finally(()=>{
                    setLoading(false)
                    console.log('데이터 요청 완료')
                })
            }, 3000);

            
        

        return ()=>{clearTimeout(timer);}
    },[])


    if(errMsg){return <p>{errMsg}</p>}
    if(loading){return <p>로딩중........</p>}
    return(
        <>
            <ul>
                {date.map((date)=>(
                    <li key={date.id}>{date.name}</li>
                ))}
            </ul>
        </>
    )
}