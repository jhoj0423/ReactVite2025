import React,{useState,useEffect} from "react";

export default function ExJ01(){
    const [loading,setLoading] = useState(true)
    const [date,setDate] = useState([])
    const [errMsg,setErrMsg] = useState(null)
    // 선택된 사용자의 번호,id
    const [number,setNumber] = useState(1)
    // 선택된 번호와 같은 사용자의 정보
    
    

    // useEffect를 이용해서 JSON 데이터 받기


    useEffect(()=>{
        console.log('데이터 요청 시작')
        //JSON의 URL부분의 파람터 형식으로 userid 가져온다
        //사용 방법 ~/user/${userId}
        fetch("https://jsonplaceholder.typicode.com/users")
        //fetch("https://jsonplaceholder.typicode.com/users/${userId}")
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log('가져온 데이터',data)
            setDate(data)
        })

        .catch((err)=>{
            console.log(`X 에러 발생 :`,err)
            setErrMsg(err.message)
        })

        .finally(()=>{
            console.log('데이터 요청 완료')
            setLoading(false)
        })
        
    },[])
    
    const nextBtn=()=>{
        
        if(number<10){
            setNumber(number+1)
        }else{
            setNumber(1)
        }
        
    }
    

    if(loading){return <p>데이터를 불러오는 중입니다...........</p>}
    if(errMsg){return <p>X에러 : {errMsg}</p>}
    
    return(
        <>
            <div>
                <h2>현재 사용된 사용자 ID :{number}</h2>
                <button type="button" onClick={nextBtn}>다음 사용자 보기</button> 
                <p>사용자 명 :{date[number-1].name}</p>
                <p>사용자 ID :{date[number-1].email}</p>
            </div>
        </>
    )
}