import React,{useState,useEffect} from "react";

export default function EXfecth01(){
    //1.상태변수
    //로딩 중 표시
    //현재 loading = true면 로딩중 ...
    const [loading,setLoading] = useState(true)
    //가져오는 데이터 저장
    const [date,setDate] = useState([])
    //에러 메시지 저장
    const [errMsg,setErrMsg] = useState(null)

    useEffect(()=>{
        console.log('데이터 요청 시작')

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{//res는 response객체의 약어
            //상태가 정상이면 true를 반환하고 비정상이면 false반환
            if(!res.ok){
                //HTTP 상태의 코트를 확인
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            //JSON 파싱 ()
            return res.json()
        })
        .then((data)=>{
            //지금 불러온 데이터는 이부분에만 존재한다.
            console.log('가져온 데이터',data)
            setDate(data)
        })
        //err를 catch 한다라는 의미.
        .catch((err)=>{
            console.log(" x 에러 발상",err)
            // 에러 상태 저장
            //.message respones객체가 가지고 있는 메서드
            setErrMsg(err.message)
        })
        //실패하든 성공하든 무조건 실행
        .finally(()=>{
            console.log('요청완료')

            setLoading(false)
        })
    },[])//<= 빈 의존객체 배열을 이용하여 1번만 실행

    //2.화면 표시
    //불러오는 중 ... 출력하고 싶다
    // => 조건 : loading = true
    if(loading){
        return(
        <>
            <div>
                <p>로딩 중....</p>
            </div>
        </>
    )
    }
    if(errMsg){
        return <p>x 에러 : {errMsg}</p>
    }

    return(
        <>
            <div>
                <h2>사용자 목록</h2>
                <ul>
                    {date.map((date)=>(
                        <li key={date.id}>{date.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}